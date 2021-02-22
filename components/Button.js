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
          /* display: flex;
          flex-direction: column;
          place-items: center; */
          /* display: inline-block; */
          /* vertial-align: middle; */
          /* line-height: normal; */
          /* margin: 1%; */
          /* padding: 1%; */
        }
      `}</style>
    </>
  );
}