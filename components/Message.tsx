import styled from 'styled-components';

const MessageStyles = styled.div`
  padding: 0.5rem 0;
  background: white;
  /* margin: 0.5rem 0; */
  /* border: 1px solid rgba(0, 0, 0, 0.05); */
  /* border-left: 5px solid red; */
  font-size: 1rem;
  width: 100%;
  max-width: 50ch;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 0.5rem;
  }
`;

type AppProps = {
  children?: React.ReactNode;
  loading?: boolean;
};

const Message = ({ children, loading }: AppProps): JSX.Element => {
  return (
    <MessageStyles>
      <p>
        {loading && 'Loading...'}

        {children}
      </p>
    </MessageStyles>
  );
};

export default Message;
