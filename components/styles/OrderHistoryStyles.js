import styled from 'styled-components';

const OrderHistoryStyles = styled.li`
  /* box-shadow: var(--bs); */
  list-style: none;
  padding: var(--spacing);
  border: 1px solid var(--offWhite);
  h2 {
    border-bottom: 2px solid var(--navyBlue);
    margin-top: 0;
    margin-bottom: var(--spacing);
    padding-bottom: var(--spacing);
  }

  .images {
    display: grid;
    grid-gap: var(--spacing);
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: var(--spacing);
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
    grid-gap: var(--spacing);
    text-align: center;
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.03);
      padding: var(--spacing) 0;
    }
    strong {
      display: block;
      margin-bottom: var(--spacing);
    }
  }
`;

export default OrderHistoryStyles;
