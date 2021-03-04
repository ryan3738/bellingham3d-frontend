import Link from 'next/link';

export default function NavItem({
  href,
  showOnLarge,
  burgerMenuLink,
  children,
}) {
  return (
    <>
      {href ? (
        <Link href={href}>
          <div
            className={`nav-link ${showOnLarge && 'show-on-large'} ${
              burgerMenuLink && 'burger-menu-link'
            }`}
          >
            {children}
          </div>
        </Link>
      ) : (
        <div
          className={`nav-link ${showOnLarge && 'show-on-large'} ${
            burgerMenuLink && 'burger-menu-link'
          }`}
        >
          {children}
        </div>
      )}
      <style jsx>{`
        .nav-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-transform: uppercase;
          padding: 1rem;
          margin: 0;
          font-weight: 900;
          cursor: pointer;
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

        a:hover {
          color: var(--white);
          background: var(--navyBlue);
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
