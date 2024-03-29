import { AppProps } from "next/app";
import { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styled/globalStyle";
import { theme } from "styled/theme";
import Layout from "components/layout";
import {
  Hydrate,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider as AuthProvider } from "next-auth/client";
import { toast } from "react-hot-toast";
import store from "lib/store";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            toast.error(`에러가 발생하였습니다: ${error}`);
          },
        }),
      })
  );

  return (
    <>
      <Head>
        <title>SandoShop</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <AuthProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Provider store={store}>
              <ReactQueryDevtools initialIsOpen={false} />
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
            </Provider>
          </Hydrate>
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
};

export default MyApp;
