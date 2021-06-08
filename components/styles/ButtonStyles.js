import styled from 'styled-components';

const ButtonStyles = styled.button`
  padding: 5px;
  margin: var(--spacing) calc(var(--spacing) / 2);
  min-height: 44px;
  min-width: 72px;
  :hover {
    animation-name: background-color;
    animation-duration: 500ms;
    opacity: 0.65;
  }
`;

export default ButtonStyles;
