import styled from 'styled-components';

const ItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGray);
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-gap: 1px;
    background: var(--lightGray);
    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default ItemStyles;
