import {
  extendTheme,
  theme as base,
} from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      600: "#0066ff",
    },
  },
  fonts: {
    heading: `Montserrat, sans-serif, ${base.fonts?.body}`,
    body: `Montserrat, sans-serif, ${base.fonts?.body}`,
  },
});
