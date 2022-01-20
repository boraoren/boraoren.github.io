import {extendTheme} from '@chakra-ui/react';

export const themeOverride = {
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1536px",
    },
    fonts: {
        caveat: "Caveat",
        primary: "Roboto",
        secondary: "Handlee",
    },
    textStyles: {
        h1: {
            fontSize: ['24px', '48px', '6xl'],
            fontWeight: 900,
            textTransform: "uppercase",
            fontFamily: "primary",

            ml: 4
        },
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
        useSystemColorMode: false
    },
    styles: {
        global: {
            '.mdx-prose': {
                h1: {
                    fontSize: '4xl',
                    mb: '4',
                    textTransform: "uppercase",
                },
                h2: {
                    fontSize: '3xl',
                    mb: '4',
                },
                h3: {
                    fontSize: '2xl',
                    mb: '4',
                },
                p: {
                    fontSize: ['md', 'lg', 'xl', '2xl'],
                    ml:'4',
                    alignSelf: "center",
                    fontFamily: "primary",
                    fontWeight: 400,
                    mt: -2,
                    mr: '4'
                }
            },
        }
    }
};


const theme = extendTheme(
    themeOverride
);

export default theme;
