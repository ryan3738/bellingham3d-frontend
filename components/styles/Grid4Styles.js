import styled from 'styled-components';

const Grid4Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: var(--spacing);
  justify-content: center;
  justify-items: center;
  margin-bottom: var(--spacing);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0px;
  }
  div {
    text-align: left;
    /* border: 1px solid var(--navyBlue); */
    padding: var(--spacing);
    /* background: var(--lightBlue); */
    box-shadow: var(--bs);
    ul li {
      padding-left: 5px;
    }
  }
`;

export default Grid4Styles;
