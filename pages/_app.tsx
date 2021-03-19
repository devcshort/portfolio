import GlobalStylesheet from '../components/GlobalStylesheet/GlobalStylesheet';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStylesheet />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
