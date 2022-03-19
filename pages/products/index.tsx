import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Products/Pagination';
import Products from '../../components/Products/Products';

const ProductsPage = function (): JSX.Element {
  const { query } = useRouter();
  const page = typeof query.page === 'string' ? parseInt(query.page) : null;
  return (
    <>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </>
  );
};

export default ProductsPage;
