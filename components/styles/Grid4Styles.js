import styled from 'styled-components';

const Grid4Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: var(--spacing);


  div {
    text-align: left;
    border: 1px solid var(--navyBlue);
    padding: var(--spacing);
    /* background: var(--lightBlue); */
    box-shadow: var(--bs);
    ul li {
      padding-left: 5px;
    }
  }
`;

export default Grid4Styles;
