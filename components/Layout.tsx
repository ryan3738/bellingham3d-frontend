import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router';
import NavBar from './NavBar/NavBar';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Octin College Regular" ;
  src: url("/fonts/octin-college/octin-college-regular2.woff2") format("woff2"),url("/fonts/octin-college/octin-college-regular.woff") format("woff");
font-weight: normal;
font-style: normal;
}
html {
  --navyBlue: var(--navyBlue-800);
  --navyBlue-50: #EDF3F8;
  --navyBlue-100: #CBDDEB;
  --navyBlue-200: #AAC7DE;
  --navyBlue-300: #89B1D2;
  --navyBlue-400: #689CC5;
  --navyBlue-500: #4786B8;
  --navyBlue-600: #396B93;
  --navyBlue-700: #2A506F;
  --navyBlue-800: #1C364A;
  --navyBlue-900: #0E1B25;
  --red: var(--navyBlue);
  --lightBlue: #b2e2f5;
  --black: #231f20;
  --grey: #3A3A3A;
  --gray: var(--grey);
  --lightGrey: #e1e1e1;
  --lightGray: var(--lightGrey);
  --color-facebook: #3b5998;
  --color-instagram: #fb3958;
  --offWhite: #ededed;
  --white: #ffffff;
  --maxWidth: 1120px;
  --spacing: 0.75rem;
  --bs: 0 2px 1px 0 rgba(0, 0, 0, 0.16);
  --hover: 0.92;
  --disabled: 0.38;
  --borderRadius: 5px;
  box-sizing: border-box;
  font-size: 62.5%;
 }
 *, *:before, *:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
 }
 html,
 body{
  font-family:  'Octin College Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  height: 100%;
  min-height: 100%;
  font-size: 100%;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
 }

a{
  text-decoration: none;
  color: var(---black);
}
a:hover{
  text-decoration: underline;
}
button{
  font-family:  'Octin College Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: 0;
}
button:hover {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--primary-color-desaturated);
  text-transform: uppercase;
}

h1 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 3rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0.75rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  line-height: 1.1;
}
h2 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 2rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0.5rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
}
h3 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 1.8rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.38316rem;
  line-height: 1.1;
}
h4 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 1.8rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.1;
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 1.8rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 1.8rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0.45rem;
  color: inherit;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.78405rem;
  line-height: 1.1;
}
`;

const InnerStyles = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: var(--spacing);
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: space-evenly;
  justify-items: start;
  justify-content: start;
  height: 100%;
  min-height: 90vh;
`;

type LayoutProps = {
  children?: React.ReactNode;
  meta?: [string];
}

const Layout = function ({
  children,
  meta: pageMeta,
}: LayoutProps ): JSX.Element {
  const router = useRouter();
  const meta = {
    title: 'Bellingham 3D',
    description:
      'A 3D printing and engineering design company based in Bellingham',
    keywords: '3D, printing, design',
    cardImage: '/og.png',
    ...pageMeta,
  };
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {/* Social media information */}
        {/* Open Graph */}
        <meta
          property="og:url"
          content={`https://bellingham3d.com${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="website" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
        {/* Favicon info */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <GlobalStyles />
      <NavBar />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
};

export default Layout;