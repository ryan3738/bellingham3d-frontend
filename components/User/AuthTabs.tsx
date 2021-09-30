import { useEffect } from 'react';
import { MenuStateProvider, useMenu } from '../../lib/menuState';
import { ButtonStyles } from '../styles/StateStyles';
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
            <ButtonStyles
              type="button"
              name="default"
              value="signup"
              onClick={handleClick}
              disabled={tab === 'signup'}
            >
              Sign Up
            </ButtonStyles>
            <ButtonStyles
              type="button"
              name="select"
              value="signin"
              onClick={handleClick}
              disabled={tab === 'signin'}
            >
              Sign In
            </ButtonStyles>
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
