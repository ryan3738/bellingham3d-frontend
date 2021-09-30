import { MenuStateProvider, useMenu } from '../../lib/menuState';
import { ButtonStyles } from '../styles/StateStyles';
import RequestMagicAuth from './RequestMagicAuth';
import SignUpMagicAuth from './SignUpMagicAuth';

const Auth = (): JSX.Element => {
  const { menuOpen, openMenu, tab, setTab } = useMenu();
  function handleClick(e): void {
    setTab(() => e.target.value);
  }

  return (
    <>
      <div>
        <div>
          <h3>Shipping Address</h3>
          {tab === 0 && <SignUpMagicAuth />}
          {tab === 1 && <RequestMagicAuth />}

          <div>
            <ButtonStyles
              type="button"
              name="default"
              value="0"
              onClick={handleClick}
              disabled={tab === 0}
            >
              Continue
            </ButtonStyles>
            <ButtonStyles
              type="button"
              name="select"
              value="1"
              onClick={handleClick}
              disabled={tab === 1}
            >
              Select Address
            </ButtonStyles>
            <ButtonStyles
              type="button"
              name="new"
              value={2}
              onClick={handleClick}
              disabled={tab === 2}
            >
              New Address
            </ButtonStyles>
          </div>
        </div>
      </div>
    </>
  );
};

export default function AuthMenu(): JSX.Element {
  return (
    <MenuStateProvider>
      <Auth />
    </MenuStateProvider>
  );
}
