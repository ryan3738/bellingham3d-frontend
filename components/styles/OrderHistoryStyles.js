import styled from 'styled-components';

const OrderHistoryStyles = styled.li`
  /* box-shadow: var(--bs); */
  list-style: none;
  padding: 0.5rem;
  border: 1px solid var(--offWhite);
  h2 {
    border-bottom: 2px solid var(--navyBlue);
    margin-top: 0;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .images {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 0.5rem;
    img {
      height: 200px;
      object-fit: cover;
      width: 100%;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    display: grid;
    grid-gap: 0.5rem;
    text-align: center;
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.03);
      padding: 1rem 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default OrderHistoryStyles;
