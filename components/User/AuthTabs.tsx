import styled from 'styled-components';
import { MenuStateProvider, useMenu } from '../../lib/menuState';
import { TabStyles } from '../styles/StateStyles';
import RequestMagicAuth from './RequestMagicAuth';
import SignUpMagicAuth from './SignUpMagicAuth';

const TabContainerStyles = styled.div`
  border: 1px solid #e6e6e6;
  margin: var(--spacing) 0;
`;

const TabButtonsStyles = styled.div`
  display: flex;
  flex-direction: row;
`;

const Auth = (): JSX.Element => {
  const { tab, setTab } = useMenu();

  function handleClick(e): void {
    setTab(() => e.target.value);
  }

  return (
    <TabContainerStyles>
      <TabButtonsStyles>
        <TabStyles
          type="button"
          name="default"
          value="signup"
          onClick={handleClick}
          disabled={tab === 'signup'}
        >
          Sign Up
        </TabStyles>
        <TabStyles
          type="button"
          name="select"
          value="signin"
          onClick={handleClick}
          disabled={tab === 'signin'}
        >
          Sign In
        </TabStyles>
      </TabButtonsStyles>
      <div>
        {tab === 'signup' && <SignUpMagicAuth />}
        {tab === 'signin' && <RequestMagicAuth />}
      </div>
    </TabContainerStyles>
  );
};

export default function AuthTabs(): JSX.Element {
  return (
    <MenuStateProvider>
      <Auth />
    </MenuStateProvider>
  );
}
