import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { lightTheme } from "../../styles/theme";

const ThemeProviderContainer = ({ Component, pageProps }: any): JSX.Element => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
