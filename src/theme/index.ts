import { DarkTheme } from '@react-navigation/native';

export const colors = {
  // Backgrounds
  background: '#040404',
  backgroundSecondary: '#0E0E0E',
  backgroundThirdy: '#101010',

  // Borders
  border: '#2F2F2F',
  borderError: '#7E0000',

  // Buttons   
  primary: '#55CF24',
  secondary: '#CF2424',

  // Texts
  textSecondary: '#BEBEBE',
  textMuted: '#0E0E0E',
  textError: '#B30303',
};

export const fonts = {
  urbanist: {
    regular: 'Urbanist_400Regular',
    medium: 'Urbanist_500Medium',
    semibold: 'Urbanist_600SemiBold',
    bold: 'Urbanist_700Bold',
  },

  manrope: {
    regular: 'Manrope_400Regular',
    medium: 'Manrope_500Medium',
  },
};

export const theme = {
  ...DarkTheme,

  colors: {
    ...DarkTheme.colors,

    background: colors.background,
    backgroundSecondary: colors.backgroundSecondary,
    backgroundThirdy: colors.backgroundThirdy,
    border: colors.border,
    borderError: colors.borderError,
    button: colors.primary,
    buttonError: colors.secondary,
    textSecondary: colors.textSecondary,
    textMuted: colors.textMuted,
    textError: colors.textError,
  },
};