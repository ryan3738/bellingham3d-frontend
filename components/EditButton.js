import Link from 'next/link';

export default function EditButton({ id, children, pathname }) {
  return (
    <Link
      href={{
        pathname,
        query: {
          id,
        },
      }}
      passHref
    >
      <button type="button" className="button-text">
        {children}
      </button>
    </Link>
  );
}
