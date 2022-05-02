import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { themeAtom } from "../../store/theme/theme";
import GlobalStyle from "../../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../../styles/theme";
import PageTemplate from "../common/pageTemplate/PageTemplate";

const ThemeProviderContainer = ({ Component, pageProps }: any): JSX.Element => {
  const currentTheme = useRecoilValue(themeAtom);

  return (
    <ThemeProvider theme={currentTheme === "LIGHT" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
