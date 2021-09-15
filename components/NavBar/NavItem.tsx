import Link from 'next/link';
import { ColorStateStyles } from '../styles/StateStyles';

type AppProps = {
  href?: string;
  showOnLarge?: boolean;
  showInBurgerMenu?: boolean;
  children?: React.ReactNode;
};

export default function NavItem({
  href,
  showOnLarge,
  showInBurgerMenu,
  children,
}: AppProps): JSX.Element {
  return (
    <>
      {href ? (
        <Link href={href}>
          <a
            className={`nav-link ${showOnLarge && 'show-on-large'} ${
              showInBurgerMenu && 'burger-menu-link'
            }`}
          >
            <ColorStateStyles>{children}</ColorStateStyles>
          </a>
        </Link>
      ) : (
        <div
          className={`nav-link ${showOnLarge && 'show-on-large'} ${
            showInBurgerMenu && 'burger-menu-link'
          }`}
        >
          <ColorStateStyles>{children}</ColorStateStyles>
        </div>
      )}
      <style jsx>{`
        .nav-link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-transform: uppercase;
          padding: 0 var(--spacing);
          min-width: 42px;
          height: 56px;
          width: auto;
          margin: 0;
          font-weight: 900;
          text-decoration: none;
        }

        button {
          padding: 0;
          display: flex;
          align-items: center;
          position: relative;
          text-transform: uppercase;
          background: none;
          border: 0;
          cursor: pointer;
        }
      `}</style>
      <style jsx>{`
        .burger-menu-link {
          margin: 0;
        }
        .show-on-large {
          display: none;
        }

        @media (min-width: 769px) {
          .show-on-large {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
