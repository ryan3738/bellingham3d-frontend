import { useEffect } from 'react';
import { MenuStateProvider, useMenu } from '../../lib/menuState';
import { TabStyles } from '../styles/StateStyles';
import RequestMagicAuth from './RequestMagicAuth';
import SignUpMagicAuth from './SignUpMagicAuth';

const Auth = (): JSX.Element => {
  const { menuOpen, openMenu, tab, setTab } = useMenu();

  // useEffect(() => {
  //   // This function runs when the things we are watching change
  //   setTab('signup');
  // });

  function handleClick(e): void {
    setTab(() => e.target.value);
  }

  return (
    <>
      <div>
        <div>
          <div>
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
          </div>
          {tab === 'signup' && <SignUpMagicAuth />}
          {tab === 'signin' && <RequestMagicAuth />}
        </div>
      </div>
    </>
  );
};

export default function AuthTabs(): JSX.Element {
  return (
    <MenuStateProvider>
      <Auth />
    </MenuStateProvider>
  );
}
