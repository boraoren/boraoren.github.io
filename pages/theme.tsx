import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto/900.css'
import '@fontsource/roboto/400.css'
import '@fontsource/caveat/400.css'

const theme = extendTheme({
  fonts: {
    caveat: "Caveat",
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
    title: "Roboto",
    subtitle: "Handlee",
    "journal.summary": "Roboto" 
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    primary: {
      50: "#F7FAFC",
      800: "#1A202C",
      900: "#18181b",
    },
    secondary: {
      400: "#4299E1",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  }
});

export default theme;
