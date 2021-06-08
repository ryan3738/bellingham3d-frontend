import styled from 'styled-components';

const CloseButton = styled.button`
  color: var(--navyBlue);
  padding: 0;
  margin: 0 0.25rem;
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
  background: none;
  :hover {
    opacity: 0.54;
  }
`;

export default CloseButton;
