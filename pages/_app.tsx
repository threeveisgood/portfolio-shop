import { AppProps } from "next/app";
import { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styled/globalStyle";
import { theme } from "styled/theme";
import { wrapper } from "store";
import Layout from "components/layout";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "next-auth/client";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Jonghwi Choi Portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider session={pageProps.session}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </Hydrate>
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
