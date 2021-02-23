export default function Button({ children, buttonLink }) {
  return (
    <>
      <a href={buttonLink}>
        <button type="button" className="button-text">
          <span className="button-text">{children}</span>
        </button>
      </a>

      <style jsx>{`
        .button-text {
          width: auto;
          background: var(--red);
          color: white;
          border: 0;
          font-size: 2rem;
          font-weight: 600;
          padding: 0.5rem 1.2rem;
        }
      `}</style>
    </>
  );
}
