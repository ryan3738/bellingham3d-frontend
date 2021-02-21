import styled from 'styled-components';

const Grid4Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 5px;
  padding: 5%;

  div {
    text-align: left;
    border-color: var(--navyBlue);
    border-radius: 7px;
    padding: 5%;
    background: var(--lightBlue);
    border-color: var(--navyBlue);
  }
`;

export default Grid4Styles;
