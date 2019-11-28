import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
export const appTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      50: '#e2fbed',
      100: '#c2ebd3',
      200: '#9fddb8',
      300: '#7ccf9d',
      400: '#58c182',
      500: '#3ea768',
      600: '#2e8250',
      700: '#205d39',
      800: '#0f3921',
      900: '#001506',
    },
  },
};