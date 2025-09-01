// App-wide constants
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 968,
  LARGE: 1200,
} as const;

export const COLORS = {
  PRIMARY: '#5ba3d1',
  PRIMARY_HOVER: '#4a92c0',
  SECONDARY: '#6c757d',
  SUCCESS: '#28a745',
  DANGER: '#dc3545',
  WARNING: '#ffc107',
  INFO: '#17a2b8',
  LIGHT: '#f8f9fa',
  DARK: '#343a40',
  WHITE: '#ffffff',
  BLACK: '#000000',
} as const;
