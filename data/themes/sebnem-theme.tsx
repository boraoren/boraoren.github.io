import {extendTheme} from '@chakra-ui/react';

const h1 = {
    fontSize: ['xl', '2xl', '4xl', '6xl'],
    fontFamily: "primary",
    fontWeight: 600,
}

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
        secondary: "Open Sans",
    },
    textStyles: {
        h1,
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
        white: "#F7F5F0",
        primary: {
            50: "#F7FAFC",
            400: "#94a3b8",
            600: "#475569",
            800: "#1A202C",
            900: "#18181b",
        },
        secondary: {
            400: "#5DB075",
        },
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },
    styles: {
        global: {
            '.mdx-prose': {
                h1,
                h2: {
                    fontSize: '3xl',
                    color: "secondary.400",
                    mb: 2,
                    fontFamily: "secondary",
                },
                h3: {
                    fontSize: '2xl',
                    fontFamily: "primary",
                    fontWeight: "bold",
                    mb: 2

                },
                p: {
                    fontSize: ['md', 'lg', 'xl', '2xl'],
                    ml: '4',
                    alignSelf: "center",
                    fontFamily: "primary",
                    fontWeight: 400,
                    mt: 2,
                    mb: 4
                },
                ul: {
                    margin: "revert",
                    padding: "revert",
                    fontSize: ['md', 'lg', 'xl', '2xl'],
                    alignSelf: "center",
                    fontFamily: "primary",
                    fontWeight: 400,
                    mt: 4
                },
                li: {
                    mb: 3
                },
                ol: {
                    margin: "revert",
                    padding: "revert",
                    fontSize: ['md', 'lg', 'xl', '2xl'],
                    alignSelf: "center",
                    fontFamily: "primary",
                    fontWeight: 400,
                },
                code: {
                    whiteSpace: "pre-wrap",
                },
                pre: {
                    whiteSpace: "pre-wrap",
                    mb: 5
                }
            },
        }
    }
};


const theme = extendTheme(
    themeOverride
);

export default theme;
