import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    "html, body": {
      fontSize: "sm",
      color: props.colorMode === "dark" ? "white" : "#000",
      lineHeight: "tall",
    },
    a: {
      color: props.colorMode === "dark" ? "white" : "#000",
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
