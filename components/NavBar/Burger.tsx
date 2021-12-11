type AppProps = {
  open: boolean;
  setOpen: Function;
};

const Burger = function ({ open, setOpen }: AppProps): JSX.Element {
  return (
    <button
      className="styled-burger"
      type="button"
      tabIndex={0}
      title="Toggle menu"
      onClick={() => setOpen(!open)}
    >
      <div className="top-bun" />
      <div className="patty" />
      <div className="bottom-bun" />
      <style jsx>{`
        .styled-burger {
          margin: 1rem;
          padding: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          width: 2.625rem;
          height: 2.625rem;
          background: var(--white);
          border: 0;
          cursor: pointer;
          z-index: 11;
          border-radius: 7px;
        }
        div:focus {
          outline: none;
        }
        div {
          width: 2.625rem;
          height: 0.25rem;
          border-radius: var(--borderRadius);
          transition: all 0.2s linear;
          position: relative;
          transform-origin: 0.3rem;
          z-index: 10;
        }
      `}</style>
      {/* animation styles */}
      <style jsx>{`
        div {
          background: ${open ? 'var(--navyBlue-400)' : 'var(--navyBlue-800)'};
        }

        .top-bun {
          transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        .patty {
          opacity: ${open ? '0' : '1'};
          transform: ${open ? 'translateX(20px)' : 'translateX(0)'};
        }

        .bottom-bun {
          transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      `}</style>
    </button>
  );
};

export default Burger;
