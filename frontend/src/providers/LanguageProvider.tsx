'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  isLocale,
  localizedPageDescriptions,
  localizedPageTitles,
  translateContent,
  uiTranslations,
  type Locale,
  type UiKey,
} from '@/locales';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: UiKey) => string;
}

type TextState = { source: string; lastApplied: string };
type AttributeState = Record<string, TextState>;

const LanguageContext = createContext<LanguageContextValue | null>(null);
const translatedAttributes = ['aria-label', 'placeholder', 'title'] as const;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>('th');
  const localeRef = useRef<Locale>('th');
  const textStates = useRef(new WeakMap<Text, TextState>());
  const attributeStates = useRef(new WeakMap<Element, AttributeState>());
  // ค่า title / description เดิมจากเซิร์ฟเวอร์ (ภาษาไทย) ของหน้าปัจจุบัน เพื่อคืนค่าเมื่อสลับกลับเป็นไทย
  const serverHead = useRef<{ path: string; title: string; description: string } | null>(null);

  const translateNode = useCallback((node: Node, currentLocale: Locale) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const textNode = node as Text;
      const parent = textNode.parentElement;
      if (!parent || parent.closest('script, style, code, pre, [data-no-translate]')) return;
      const current = textNode.nodeValue ?? '';
      if (!current.trim()) return;
      const prior = textStates.current.get(textNode);
      const source = prior && current === prior.lastApplied ? prior.source : current;
      const translated = translateContent(source, currentLocale);
      textStates.current.set(textNode, { source, lastApplied: translated });
      if (translated !== current) textNode.nodeValue = translated;
      return;
    }

    if (!(node instanceof Element)) return;
    if (node.matches('script, style, code, pre, [data-no-translate]')) return;
    const states = attributeStates.current.get(node) ?? {};
    translatedAttributes.forEach((attribute) => {
      const current = node.getAttribute(attribute);
      if (!current) return;
      const prior = states[attribute];
      const source = prior && current === prior.lastApplied ? prior.source : current;
      const translated = translateContent(source, currentLocale);
      states[attribute] = { source, lastApplied: translated };
      if (translated !== current) node.setAttribute(attribute, translated);
    });
    attributeStates.current.set(node, states);
    node.childNodes.forEach((child) => translateNode(child, currentLocale));
  }, []);

  const translateDocument = useCallback((currentLocale: Locale) => {
    translateNode(document.body, currentLocale);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (!serverHead.current || serverHead.current.path !== pathname) {
      serverHead.current = {
        path: pathname,
        title: document.title,
        description: metaDescription?.getAttribute('content') ?? '',
      };
    }

    // เฉพาะ route ที่ตรงกันเท่านั้น — หน้าย่อย (เช่น บทความ) คงชื่อเรื่องของตัวเองไว้
    const pageTitle = localizedPageTitles[currentLocale][pathname];
    const pageDescription = currentLocale === 'th' ? undefined : localizedPageDescriptions[currentLocale][pathname];
    if (pageTitle) {
      document.title = pathname === '/' ? pageTitle : `${pageTitle} | S2 Accounting Consultant`;
    } else {
      document.title = serverHead.current.title;
    }
    const description = pageDescription ?? serverHead.current.description;
    ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]'].forEach((selector) => {
      document.querySelector(selector)?.setAttribute('content', description);
    });
  }, [pathname, translateNode]);

  useEffect(() => {
    const saved = localStorage.getItem('s2-locale');
    const initial = isLocale(saved) ? saved : 'th';
    localeRef.current = initial;
    setLocaleState(initial);
    document.documentElement.lang = initial === 'zh' ? 'zh-CN' : initial;
  }, []);

  useEffect(() => {
    translateDocument(locale);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') translateNode(mutation.target, localeRef.current);
        mutation.addedNodes.forEach((node) => translateNode(node, localeRef.current));
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    // Next.js เขียน <title> จาก metadata (ภาษาไทย) หลัง hydrate — คืนชื่อหน้าตามภาษาที่เลือกเมื่อถูกเขียนทับ
    // เฉพาะ EN/ZH และ route ที่มีชื่อหน้าแปลไว้ — หน้าอื่น (เช่น บทความ) ปล่อยให้ Next.js กำหนดตามปกติ
    const routeTitle = locale === 'th' ? undefined : localizedPageTitles[locale][pathname];
    const localizedTitle = routeTitle && (pathname === '/' ? routeTitle : `${routeTitle} | S2 Accounting Consultant`);
    const headObserver = new MutationObserver(() => {
      if (localizedTitle && document.title !== localizedTitle) document.title = localizedTitle;
    });
    if (localizedTitle) headObserver.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => {
      observer.disconnect();
      headObserver.disconnect();
    };
  }, [locale, pathname, translateDocument, translateNode]);

  const setLocale = useCallback((nextLocale: Locale) => {
    localeRef.current = nextLocale;
    setLocaleState(nextLocale);
    localStorage.setItem('s2-locale', nextLocale);
    document.documentElement.lang = nextLocale === 'zh' ? 'zh-CN' : nextLocale;
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    setLocale,
    t: (key) => uiTranslations[locale][key],
  }), [locale, setLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
