import styled from 'styled-components';

const ButtonStyles = styled.button`
  cursor: pointer;
  color: var(--offWhite);
  padding: var(--spacing);
  margin: var(--spacing) calc(var(--spacing) / 2);
  border: 0;
  min-height: 42px;
  min-width: 42px;
  height: auto;
  width: auto;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  background: var(--navyBlue-600);
  border-radius: var(--borderRadius);
  transition: all 0.25s;
  :hover {
    background: var(--navyBlue-800);
  }
  :focus {
    /* outline: 0.15rem solid var(--navyBlue-900); */
  }
  :disabled,
  [disabled] {
    opacity: var(--disabled);
    cursor: auto;
  }
`;
const TabStyles = styled(ButtonStyles)`
  margin: 0;
  padding: calc(var(--spacing) * 1.5);
  border-radius: 0;
  width: 100%;
  background: var(--navyBlue-50);
  color: var(--navyBlue-900);
  :hover {
    background: var(--navyBlue-200);
    /* color: var(--offWhite); */
  }
  :disabled,
  [disabled] {
    opacity: 1;
    background: var(--navyBlue-800);
    color: var(--offWhite);
  }
`;

const ButtonIconStyles = styled(ButtonStyles)`
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: var(--navyBlue-600);
  background: none;
  :hover {
    color: var(--navyBlue-800);
    background: none;
  }
`;

const BackgroundStateStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 var(--spacing);
  margin: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.25s;
  border-radius: var(--borderRadius);
  background: var(--navyBlue-600);
  :hover {
    background: var(--navyBlue-800);
  }
  :disabled,
  [disabled] {
    opacity: var(--disabled);
  }
`;

const ColorStateStyles = styled(BackgroundStateStyles)`
  color: var(--navyBlue-600);
  background: none;
  :hover {
    color: var(--navyBlue-800);
    background: var(--navyBlue-50);
  }
`;

export {
  ColorStateStyles,
  ButtonIconStyles,
  ButtonStyles,
  BackgroundStateStyles,
  TabStyles,
};
