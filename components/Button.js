import Link from 'next/link';

export default function Button({
  children,
  buttonLink,
  internalLink,
  onClick,
}) {
  return (
    <>
      {buttonLink && (
        <a href={buttonLink}>
          <button type="button" className="button-text" onClick={onClick}>
            {children}
          </button>
        </a>
      )}
      {internalLink && (
        <Link href={internalLink}>
          <button type="button" className="button-text" onClick={onClick}>
            {children}
          </button>
        </Link>
      )}

      <style jsx>{`
        .button-text {
          min-height: 44px;
          min-width: 72px;
        }
      `}</style>
    </>
  );
}
