import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';
import { siteData } from '../public/site-data';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>
          {siteData.businessName} Products - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1} className="page-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -5 24 24"
            width="24"
            height="24"
            preserveAspectRatio="xMinYMin"
            className="icon__icon"
          >
            <path d="M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z" />
          </svg>
        </a>
      </Link>
      <div className="page-count">
        Page {page} of {pageCount}
      </div>
      {/* <div>{count} Items Total</div> */}
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount} className="page-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -5 24 24"
            width="24"
            height="24"
            preserveAspectRatio="xMinYMin"
            className="icon__icon"
          >
            <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z" />
          </svg>
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
