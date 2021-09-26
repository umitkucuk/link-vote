import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: any
    breakpoint: any
  }
}

export const light: DefaultTheme = {
  color: {
    black: '#000000',
    white: '#FFFFFF',

    primary50: '#F5F3FF',
    primary100: '#EDE9FE',
    primary200: '#DDD6FE',
    primary300: '#C4B5FD',
    primary400: '#A78BFA',
    primary500: '#8B5CF6',
    primary600: '#7C3AED',
    primary700: '#6D28D9',
    primary800: '#5B21B6',
    primary900: '#4C1D95',

    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',

    green50: '#ECFDF5',
    green100: '#D1FAE5',
    green200: '#A7F3D0',
    green300: '#6EE7B7',
    green400: '#34D399',
    green500: '#10B981',
    green600: '#059669',
    green700: '#047857',
    green800: '#065F46',
    green900: '#064E3B',

    red50: '#FEF2F2',
    red100: '#FEE2E2',
    red200: '#FECACA',
    red300: '#FCA5A5',
    red400: '#F87171',
    red500: '#EF4444',
    red600: '#DC2626',
    red700: '#B91C1C',
    red800: '#991B1B',
    red900: '#7F1D1D',
  },
  breakpoint: {
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 425px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1440px)`,
    desktop: `(min-width: 2560px)`,
  },
}
