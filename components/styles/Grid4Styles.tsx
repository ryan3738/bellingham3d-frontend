import styled from 'styled-components';

const Grid4Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: var(--spacing);
  justify-content: center;
  justify-items: center;
  margin-bottom: var(--spacing);
  margin: 0;
  padding: 0;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0px;
    text-align: center;
  }
  div {
    text-align: left;
    border: 1px solid var(--lightGray);
    padding: calc(2 * var(--spacing));
    /* background: var(--lightBlue); */
    box-shadow: var(--bs);
    border-radius: 1px;
    ul li {
      padding-left: 0px;
      margin-left: 0px;
    }
  }
`;

export default Grid4Styles;
