import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  problem: string;
  deliverables: string[];
  process: string[];
  documents: string[];
  duration: string;
  suitableFor: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  priceNote: string;
  audience: string;
  highlighted?: boolean;
  features: string[];
  documents: string;
  meetings: string;
  reports: string;
  support: string;
}

export interface ComparisonRow {
  feature: string;
  values: (string | boolean)[];
}

export interface AddOn {
  icon: LucideIcon;
  name: string;
  price: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  initials: string;
}
