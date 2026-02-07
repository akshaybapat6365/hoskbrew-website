export const brandColors = {
  primary: "#44CF6C",
  secondary: "#11192C",
  accent: "#007AFF",
} as const;

export const animations = {
  duration: {
    fast: "150ms",
    base: "300ms",
    slow: "500ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
} as const;

export const shadows = {
  sm: "0 1px 2px 0 rgba(17, 25, 44, 0.05)",
  md: "0 4px 6px -1px rgba(17, 25, 44, 0.1), 0 2px 4px -2px rgba(17, 25, 44, 0.05)",
  lg: "0 10px 15px -3px rgba(17, 25, 44, 0.1), 0 4px 6px -4px rgba(17, 25, 44, 0.05)",
  xl: "0 20px 25px -5px rgba(17, 25, 44, 0.1), 0 8px 10px -6px rgba(17, 25, 44, 0.05)",
  "2xl": "0 25px 50px -12px rgba(17, 25, 44, 0.25)",
  primary:
    "0 10px 25px -5px rgba(68, 207, 108, 0.3), 0 8px 10px -6px rgba(68, 207, 108, 0.2)",
} as const;

export const spacing = {
  component: "4rem",
  section: "6rem",
  page: "8rem",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const containerMaxWidths = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const fontSizes = {
  display: {
    lg: "4.5rem",
    md: "3.75rem",
    sm: "3rem",
  },
  heading: {
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.5rem",
    h4: "1.25rem",
    h5: "1.125rem",
    h6: "1rem",
  },
  body: {
    lg: "1.125rem",
    base: "1rem",
    sm: "0.875rem",
  },
  caption: "0.75rem",
} as const;

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeights = {
  tight: 1.1,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.6,
} as const;

export const letterSpacings = {
  tighter: "-0.02em",
  tight: "-0.01em",
  normal: "0",
  wide: "0.01em",
  wider: "0.05em",
  widest: "0.1em",
} as const;
