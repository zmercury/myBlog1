import { extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from '@chakra-ui/theme';

const fonts = {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}

const breakpoints ={
    sm: "40em",
    md: "52em",
    lg: "64em",
    lg: "62em",
};

const override = {
    ...chakraTheme,
    fonts,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700,
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    },

}

const customTheme = extendBaseTheme(override);

export default customTheme;

