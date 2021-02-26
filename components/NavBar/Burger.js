import { bool, func } from 'prop-types';

export default function Burger({ open, setOpen }) {
  return (
    <>
      <div
        className="styled-burger"
        role="button"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div className="top-bun" />
        <div className="patty" />
        <div className="bottom-bun" />
        <style jsx>{`
          .styled-burger {
            /*
            position: absolute;
            top: 1rem;
            right: 2rem;

            */
            margin: 1rem;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: 2rem;
            height: 2rem;
            background: white;
            border: 0;
            /* box-shadow: 0 0 0 7px var(--secondary-color); */
            cursor: pointer;

            z-index: 10;
            border-radius: 7px;
          }
          div:focus {
            outline: none;
          }
          div {
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            transition: all 0.2s linear;
            position: relative;
            transform-origin: 0.2rem;
          }
        `}</style>
        {/* animation styles */}
        <style jsx>{`
          div {
            background: ${open ? 'var(--lightBlue)' : 'var(--navyBlue)'};
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
      </div>
    </>
  );
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
