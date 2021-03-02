import styled from 'styled-components';

const Grid4Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 0.5rem;
  padding: 0.5rem;

  div {
    text-align: left;
    /* border: 1px solid var(--navyBlue); */
    padding: 1rem;
    background: var(--lightBlue);
  }
`;

export default Grid4Styles;
