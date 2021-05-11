import Link from 'next/link';

export default function Button({ children, buttonLink, internalLink }) {
  return (
    <>
      {buttonLink && (
        <a href={buttonLink}>
          <Button type="button" className="button-text">
            {children}
          </Button>
        </a>
      )}
      {internalLink && (
        <Link href={internalLink}>
          <button type="button" className="button-text">
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
