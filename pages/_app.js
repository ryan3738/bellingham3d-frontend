import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';
import { useState } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Layout from '../components/Layout';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/cartState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  const [open, setOpen] = useState(false);
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <SimpleReactLightbox>
          {/* <NavBar open={open} setOpen={setOpen}> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* </NavBar> */}
        </SimpleReactLightbox>
      </CartStateProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
