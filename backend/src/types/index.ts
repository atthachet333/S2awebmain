export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

export interface ServiceDto {
  slug: string;
  icon: string;
  title: string;
  short: string;
  category: 'accounting' | 'tax' | 'finance' | 'advisory' | 'setup';
}

export interface PackageDto {
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
