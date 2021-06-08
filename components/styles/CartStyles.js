import styled from 'styled-components';

const CartStyles = styled.div`
  padding: var(--spacing);
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  overflow-y: auto;
  top: 0;
  right: 0;
  width: 98%;
  min-width: 250px;
  max-width: 769px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: var(--bs);
  border: 0.1rem solid var(--navyBlue);
  z-index: 15;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: space-around;
    align-items: center;
    justify-items: center;
    width: auto;
    height: 100%;
    border-bottom: 5px solid var(--black);
    margin-bottom: var(--spacing);
  }
  footer {
    border-top: var(--spacing) double var(--black);
    margin-top: var(--spacing);
    padding-top: var(--spacing);
    align-items: center;
    /* font-size: 2rem; */
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

export default CartStyles;
