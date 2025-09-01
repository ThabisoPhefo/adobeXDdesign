// Common types
export interface ButtonConfig {
  text: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface ImageConfig {
  src: string;
  alt: string;
}

// Home page specific types
export interface HeroSlide {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface HeroSection {
  slides: HeroSlide[];
}

export interface ContentSection {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  imageAlt: string;
}

export interface CallToActionSection {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface InfoColumn {
  text: string;
}

export interface InfoSection {
  title: string;
  subtitle: string;
  columns: InfoColumn[];
  ctaText: string;
  ctaLink: string;
}

export interface HomePageData {
  hero: HeroSection;
  contentSection: ContentSection;
  callToActionSection: CallToActionSection;
  infoSection: InfoSection;
}
