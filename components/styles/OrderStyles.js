import styled from 'styled-components';

const OrderStyles = styled.div`
  /* max-width: 1000px; */
  /* margin: 0; */
  text-align: center;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 0.5rem;
  border-top: 10px solid var(--navyBlue);
  width: auto;
  .summary-item {
    display: grid;
    justify-items: start;
    justify-content: start;
    align-items: start;
    align-content: start;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    margin: 0;
    border-bottom: 1px solid var(--offWhite);
    span {
      padding: 0.5rem;
      &:first-child {
        font-weight: 900;
        /* text-align: right; */
      }
      &:nth-child(2) {
        word-break: break-all;
        /* text-align: left; */
      }
    }
  }
  .order-item {
    text-align: left;
    border-bottom: 1px solid var(--offWhite);
    display: grid;
    grid-template-columns: 1fr 2fr;
    /* align-items: center; */
    grid-gap: 1rem;
    /* margin: 0.5rem 0; */
    padding: 0.5rem 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default OrderStyles;
