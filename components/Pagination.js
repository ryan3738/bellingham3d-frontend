import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import DisplayError from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';
import { siteData } from '../public/site-data';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    productsCount
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const count = data.productsCount;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>
          {siteData.businessName} Products | Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a
          aria-disabled={page <= 1}
          className="page-arrow"
          title="Previous Page"
        >
          <FaArrowLeft />
        </a>
      </Link>
      <div className="page-count">
        Page {page} of {pageCount}
      </div>
      {/* <div>{count} Items Total</div> */}
      <Link href={`/products/${page + 1}`}>
        <a
          aria-disabled={page >= pageCount}
          className="page-arrow"
          title="Next Page"
        >
          <FaArrowRight />
        </a>
      </Link>
      <style jsx>{`
        .page-count {
          font-feature-settings: 'tnum';
          font-variant-numeric: tabular-nums;
        }
        .page-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </PaginationStyles>
  );
}
