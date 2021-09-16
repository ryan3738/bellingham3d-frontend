import styled from 'styled-components';

const CartStyles = styled.div`
  .overlay {
    /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 14; /* Sit on top */
    left: 0;
    top: 0;
    border-radius: var(--radius);
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    transition: visibility 0s linear 0s, opacity 0.3s, transform 0.25s;
    transition: all 3s ease-in-out;
    ${
      // if the cart is open, display: block
      (props) =>
        props.open
          ? `
        display: block;
        opacity: 1;
        transform: scale(1);
    `
          : `
        display: none;
        opacity: 0;
        transform: scale(1.1);
        `
    }
  }

  .cart-content {
    position: relative;
    background: white;
    position: fixed;
    padding: var(--spacing);
    border: 0.1rem solid var(--navyBlue);
    min-width: 250px;
    max-width: 769px;
    width: 98%;
    height: 100%;
    box-shadow: var(--bs);
    overflow-y: auto;
    top: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s;
    transform: translateX(100%);
    ${(props) => props.open && `transform: translateX(0);`};
    z-index: 15;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: auto;
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
  .show-modal {
    opacity: 1;
    display: block;
    transform: scale(1);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
  }
`;

export default CartStyles;
