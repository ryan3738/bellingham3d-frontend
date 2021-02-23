import Link from 'next/link';

export default function EditButton({ id, children }) {
  return (
    <Link
      href={{
        pathname: '/update',
        query: {
          id,
        },
      }}
    >
      Edit
    </Link>
  );
}
