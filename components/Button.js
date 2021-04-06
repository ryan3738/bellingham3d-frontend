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
          margin: 1rem 0;
          width: auto;
          background: var(--red);
          color: white;
          border: 0;
          font-size: 1rem;
          font-weight: 500;
          padding: var(--spacing);
        }
      `}</style>
    </>
  );
}
