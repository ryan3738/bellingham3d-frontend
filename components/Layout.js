import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
/* Add back in if a custom font is wanted */
@font-face {
  font-family: "Octin College W05 Regular" ;
  src: url("Fonts/5102478/7c222601-7f4a-4740-a161-3246855fd27d.woff2") format("woff2"),url("Fonts/5102478/57f4d403-121f-4a38-bae4-9b763b490955.woff") format("woff");
font-weight: 400;
font-style: normal;
}
html {
  --navyBlue: #1c3549;
  --red: var(--navyBlue);
  --light-blue: #b2e2f5;
  --black: #231f20;
  --grey: #3A3A3A;
  --gray: var(--grey);
  --lightGrey: #e1e1e1;
  --lightGray: var(--lightGrey);
  --offWhite: #ededed;
  --maxWidth: 1000px;
  --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  font-size: 62.5%;
 }
 *, *:before, *:after {
  box-sizing: inherit;
 }
 body{
   font-family:  'Octin College W05 Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   padding: 0;
   margin: 0;
   font-size: 1.6rem;
   line-height: 2;
   height: 100%
 }

a{
  text-decoration: none;
  color: var(---black);
}
a:hover{
  text-decoration: underline;
}
button{
  font-family:  'Octin College W05 Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  height: 100%;
`;

export default function Layout({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Layout.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
