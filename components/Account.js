import styled from 'styled-components';
import RequestReset from './RequestReset';
import SignOut from './SignOut';
import { useUser } from './User';

const ContainerStyles = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  flex: 1 1 auto;
  padding: 0;
  margin: 0 auto;
`;

export default function Account(props) {
  const me = useUser();
  console.log(me);
  return (
    <ContainerStyles>
      {/* Account summary for {me.name} */}
      <SignOut>Sign Out</SignOut>
      <RequestReset />
    </ContainerStyles>
  );
}
