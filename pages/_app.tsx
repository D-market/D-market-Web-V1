import type { AppContext, AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ThemeProviderContainer from "../components/themeProviderContainer/ThemeProviderContainer";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProviderContainer Component={Component} pageProps={pageProps} />
    </RecoilRoot>
  );
}

export const getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
  };
};

export default App;
