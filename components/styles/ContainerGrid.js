const { default: styled } = require('styled-components');

const ContainerGrid = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100%;
  display: inline-grid;
  align-items: start;
  align-content: start;
  justify-content: start;
  justify-items: start;
  grid-gap: var(--spacing);
  padding: 0;
  margin: 0 auto;
`;

export default ContainerGrid;
