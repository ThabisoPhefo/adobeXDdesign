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

// Authentication types
export interface AuthField {
  label: string;
  required: boolean;
  type: string;
  placeholder: string;
  validation?: {
    minLength?: number;
    pattern?: string;
    message?: string;
  };
}

export interface AuthOption {
  label: string;
  type: string;
  required?: boolean;
  linkText?: string;
  href?: string;
}

export interface AuthLink {
  text: string;
  linkText?: string;
  href: string;
}

export interface AuthMessages {
  success: string;
  error: string;
}

export interface AuthSubmitButton {
  text: string;
  loadingText: string;
}

export interface AuthFormConfig {
  fields: Record<string, AuthField>;
  options?: Record<string, AuthOption>;
  submitButton: AuthSubmitButton;
  links?: Record<string, AuthLink>;
  messages: AuthMessages;
}

export interface AuthHero {
  title: string;
  subtitle: string;
}

export interface AuthPageData {
  hero: AuthHero;
  form: AuthFormConfig;
}

// Sign In specific types
export interface SignInFormData {
  EmailAddress: string;
  Password: string;
  RememberMe: boolean;
}

export interface SignInFormErrors {
  EmailAddress?: string;
  Password?: string;
}

// Sign Up specific types
export interface SignUpFormData {
  FullName: string;
  EmailAddress: string;
  Password: string;
  ConfirmPassword: string;
  AcceptTerms: boolean;
  ReceiveUpdates: boolean;
}

export interface SignUpFormErrors {
  FullName?: string;
  EmailAddress?: string;
  Password?: string;
  ConfirmPassword?: string;
  AcceptTerms?: string;
}
