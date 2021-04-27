import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

export default function EditButton({ id, children, pathname }) {
  return (
    <Link
      href={{
        pathname,
        query: {
          id,
        },
      }}
    >
      <button type="button" className="button-text">
        {children}
      </button>
    </Link>
  );
}
