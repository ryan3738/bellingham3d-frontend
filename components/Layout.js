import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
/* Add back in if a custom font is wanted */
@font-face {
  font-family: "Octin College Regular" ;
  src: url("/fonts/octin-college/octin-college-regular2.woff2") format("woff2"),url("/fonts/octin-college/octin-college-regular.woff") format("woff");
font-weight: normal;
font-style: normal;

}
html {
  --navyBlue: #1c3549;
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
  --maxWidth: 1120px;
  --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  font-size: 62.5%;
 }
 *, *:before, *:after {
  box-sizing: inherit;
 }
 body{
   font-family:  'Octin College Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   padding: 0;
   margin: 0;
   font-size: 1.6rem;
   line-height: 2;
   letter-spacing: 1px;
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
  font-family:  'Octin College Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-flow: column;
  justify-items: center;
  align-items: center;
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
