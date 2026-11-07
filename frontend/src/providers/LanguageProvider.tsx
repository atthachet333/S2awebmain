'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  isLocale,
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

const thaiPattern = /[\u0E01-\u0E3A\u0E40-\u0E5B]/;

/** แปลส่วนชื่อเรื่องก่อน " | " (คงชื่อเว็บไซต์ไว้) — ถ้าไม่มีคำแปลคืนค่าเดิม */
function translateTitle(title: string, locale: Locale): string {
  if (locale === 'th') return title;
  const [head, ...rest] = title.split(' | ');
  const translated = translateContent(head, locale);
  return rest.length ? `${translated} | ${rest.join(' | ')}` : translated;
}
const translatedAttributes = ['aria-label', 'placeholder', 'title', 'alt'] as const;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>('th');
  const localeRef = useRef<Locale>('th');
  const textStates = useRef(new WeakMap<Text, TextState>());
  const attributeStates = useRef(new WeakMap<Element, AttributeState>());
  // ชื่อหน้าเดิมจากเซิร์ฟเวอร์ (ภาษาไทย) ของหน้าปัจจุบัน เพื่อคืนค่าเมื่อสลับกลับเป็นไทย
  // Content distillation: ไม่แปล meta description ฝั่งเบราว์เซอร์อีกต่อไป — การแก้ attribute ของ <meta> ก่อนที่ React
  // จะรับ metadata ที่สตรีมมา ทำให้ React สร้าง <meta> ซ้ำ (description 2 ชุด) · ผู้ใช้ไม่เห็น meta description
  // และ crawler อ่านจาก HTML ของเซิร์ฟเวอร์ (ภาษาไทย) อยู่แล้ว
  const serverHead = useRef<{ path: string; title: string } | null>(null);

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

    // EP40: บันทึกเฉพาะค่าที่เป็นภาษาไทยจากเซิร์ฟเวอร์ — ระหว่างเปลี่ยนหน้าแบบ client-side
    // document.title อาจยังเป็นชื่อ (ที่แปลแล้ว) ของหน้าก่อนหน้า จึงไม่ควรเก็บค่านั้น
    const titleIsServer = currentLocale === 'th' || thaiPattern.test(document.title);
    if ((!serverHead.current || serverHead.current.path !== pathname) && titleIsServer) {
      serverHead.current = {
        path: pathname,
        title: document.title,
      };
    }

    // เฉพาะ route ที่ตรงกันเท่านั้น — หน้าย่อย (เช่น บทความ) คงชื่อเรื่องของตัวเองไว้
    const pageTitle = localizedPageTitles[currentLocale][pathname];
    if (pageTitle) {
      document.title = pathname === '/' ? pageTitle : `${pageTitle} | S2 Accounting Consultant`;
    } else if (serverHead.current?.path === pathname) {
      // EP36: หน้าย่อย (เช่น บทความ) แปลชื่อเรื่องจากชื่อเดิมของหน้า ถ้ามีคำแปล
      document.title = translateTitle(serverHead.current.title, currentLocale);
    }
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
    // EP40: หน้าที่ไม่มีชื่อแปลเฉพาะ (เช่น บทความ) แปลชื่อที่ Next.js เขียนใหม่ทุกครั้ง แทนการใช้ค่าที่จำไว้
    const routeTitle = locale === 'th' ? undefined : localizedPageTitles[locale][pathname];
    const fixedTitle = routeTitle ? (pathname === '/' ? routeTitle : `${routeTitle} | S2 Accounting Consultant`) : undefined;
    const headObserver = new MutationObserver(() => {
      // ระหว่างเปลี่ยนหน้าแบบ client-side Next.js เขียน <title> ของหน้าใหม่ก่อน effect ของหน้าใหม่จะทำงาน
      // observer ของหน้าเดิมต้องไม่บังคับชื่อหน้าเดิมทับ (URL เปลี่ยนแล้ว ณ จุดนี้)
      if (window.location.pathname !== pathname) return;
      if (fixedTitle) {
        if (document.title !== fixedTitle) document.title = fixedTitle;
        return;
      }
      if (thaiPattern.test(document.title)) {
        serverHead.current = { path: pathname, title: document.title };
        const translated = translateTitle(document.title, locale);
        if (translated !== document.title) document.title = translated;
      }
    });
    if (locale !== 'th') headObserver.observe(document.head, { childList: true, subtree: true, characterData: true });
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
