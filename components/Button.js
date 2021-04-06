export default function Button({ children, buttonLink }) {
  return (
    <>
      <a href={buttonLink}>
        <button type="button" className="button-text">
          {children}
        </button>
      </a>
    </>
  );
}
