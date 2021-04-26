import Link from 'next/link';
import Image from 'next/image';
import formatMoney from '../../lib/formatMoney';
import { useUser } from '../User';

export default function Product({ product }) {
  const user = useUser();
  // console.log(user);
  return (
    // ? is "optional chaining" that checks for item at each level
    <div className="productWrapper">
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            src={product?.image[0]?.image?.publicUrlTransformed}
            alt={product.name}
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
        {/* <EditButton id={product.id} /> */}
        {/* <AddToCart id={product.id} /> */}
        {user?.role?.canManageProducts && (
          <>
            {/* <EditButton /> */}
            {/* <DeleteProduct id={product.id}>
              Delet Product Icon
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
          width: 100vw;
          height: auto;
          text-align: center;
          border: 2px solid var(--lightGray);
          box-shadow: var(--bs);
          position: relative;
        }

        .productWrapper :hover {
          opacity: 0.5;
        }

        .productText {
          font-size: 1.5rem;
          font-weight: bold;
          padding: calc(var(--spacing) / 2) 0;
        }
        img {
          max-height: 240px;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
