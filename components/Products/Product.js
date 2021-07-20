import Image from 'next/image';
import Link from 'next/link';
import formatMoney from '../../lib/formatMoney';
import { useUser } from '../User';

export default function Product({ product }) {
  const user = useUser();
  // console.log(user);
  return (
    // The question mark (?) is "optional chaining" that checks for nullish value at each level
    <div className="productWrapper">
      <Link href={`/product/${product.id}`}>
        <a>
          <Image
            src={product?.image[0]?.image?.publicUrlTransformed}
            alt={product.name}
            loading="lazy"
            layout="intrinsic"
            height="240"
            width="360"
            objectFit="cover"
          />

          {/* TODO: next image component */}

          {/* <div
            id="image-div"
            // className={data.imageSize}
          >
            <Image
              className="image"
              src={product?.image[0]?.image?.publicUrlTransformed}
              alt={product.name}
              layout="responsive"
              objectFit="cover"
              height="560"
              width="560"
              // unoptimized={true}
              // unsized='true'
            />
          </div> */}
          <div className="productText">
            {product.name}

            <div>{formatMoney(product.price)}</div>
          </div>
        </a>
      </Link>
      {/* <p>{product.description}</p> */}
      <div className="buttonList">
        {/* <EditButton id={product.id} pathName='/update' /> */}
        {/* <AddToCart id={product.id} /> */}
        {user?.role?.canManageProducts && (
          <>
            {/* <EditButton /> */}
            {/* <DeleteProduct id={product.id}>
              Delete Product Icon
            </DeleteProduct> */}
          </>
        )}
      </div>

      <style jsx>{`
        a {
          text-decoration: none;
        }
        .productWrapper {
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          align-content: stretch;
          justify-items: stretch;
          align-items: stretch;
          background: white;
          max-width: 360px;
          max-height: 360px;
          height: auto;

          width: 100vw;
          text-align: center;
          border: 1px solid var(--lightGray);
          box-shadow: var(--bs);
          position: relative;
          opacity: var(--hover);
        }

        .productWrapper :hover {
          opacity: 1;
        }

        .productText {
          display: block;
          height: auto;
          width: 100%;
          font-size: 1.5rem;
          font-weight: bold;
          padding: calc(var(--spacing) / 2);
        }
      `}</style>
    </div>
  );
}
