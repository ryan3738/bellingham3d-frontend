import Link from 'next/link';

export default function Button({ children, buttonLink, internalLink }) {
  return (
    <>
      {buttonLink && (
        <a href={buttonLink}>
          <button type="button" className="button-text">
            {children}
          </button>
        </a>
      )}
      {internalLink && (
        <Link href={internalLink}>
          <button type="button" className="button-text">
            {children}
          </button>
        </Link>
      )}
    </>
  );
}
