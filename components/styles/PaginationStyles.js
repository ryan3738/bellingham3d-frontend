import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 1rem 0;
  border: 1px solid var(--lightGray);
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 1rem;
    border-right: 1px solid var(--lightGray);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    opacity: 0.5;
    pointer-events: none;
  }
`;

export default PaginationStyles;
