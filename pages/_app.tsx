import type { AppProps } from "next/app";
import Head from "next/head";

// comps
import Layout from "@containers/Layout";
import ErrorBoundary from "@containers/ErrorBoundray";
// import OpenIMContainer from "@containers/OpenIMContainer";

// styles
import "../styles/globals.css";
import "antd/dist/antd.css";
import globalStyles from "../styles/globals";

export default function MyApp({ Component, pageProps }: AppProps) {
  const renderChildren = () => {
    console.log("Component.name", Component.displayName);
    if (Component.displayName === "Login") return <Component />;
    return (
      <Layout>
        {/* <OpenIMContainer> */}
        {/* <FetchContext.Provider> */}
        <Component {...pageProps} />
        {/* </FetchContext.Provider> */}
        {/* </OpenIMContainer> */}
      </Layout>
    );
  };
  return (
    <>
      {globalStyles}
      <Head>
        <title>ingroup - your web3 address book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary>{renderChildren()}</ErrorBoundary>
    </>
  );
}
