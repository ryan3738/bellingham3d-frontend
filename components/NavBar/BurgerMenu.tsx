import NavList from './NavList';

const BurgerMenu = function ({ open }: { open: boolean }): JSX.Element {
  return (
    <>
      <nav className="styled-menu">
        <NavList showInBurgerMenu />
      </nav>
      <style jsx>{`
        .styled-menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          justify-items: center;
          background: var(--white);
          height: 100vh;
          width: 100%;
          max-width: 450px;
          /* text-align: right; */
          padding: 2rem;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 9;
          transition: transform 0.2s ease-in-out;
        }

        @media (max-width: var(--medium-screen)) {
          width: 100%;
          font-size: 1.5rem;
          text-align: center;
        }

        a {
          font-size: 2rem;
          text-transform: uppercase;
          padding: 2rem 0;
          font-weight: bold;
          letter-spacing: 0.5rem;
          /* color: var(--secondary-color); */
          text-decoration: none;
          transition: color 0.3s linear;
        }
      `}</style>
      <style jsx>{`
        .styled-menu {
          /* hide and show menu */
          transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
        }
      `}</style>
    </>
  );
};

export default BurgerMenu;
