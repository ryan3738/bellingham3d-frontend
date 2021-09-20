import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Products/Pagination';
import Products from '../../components/Products';

export default function ProductsPage(): JSX.Element {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </>
  );
}