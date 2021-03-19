import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import { useUser } from './User';

export default function GalleryItem({ product }) {
  const user = useUser();
  // console.log(user);
  return (
    // ? is "optional chaining" that checks for item at each level
    <div className="productWrapper">
      <Link href={`/product/${product.id}`}>
        <img
          src={product?.image[0]?.image?.publicUrlTransformed}
          alt={product.name}
        />
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
        {/* <div className="productText"> */}
        {/* {product.name} */}

        {/* <div>{formatMoney(product.price)}</div> */}
        {/* </div> */}
      </Link>
      {/* <p>{product.description}</p> */}
      <div className="buttonList">
        {/* <EditButton id={product.id} /> */}
        {/* <AddToCart id={product.id} /> */}
        {user?.role?.canManageProducts && (
          <>
            {/* <EditButton /> */}
            {/* <DeleteProduct id={product.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-4 -2 24 24"
                width="24"
                height="24"
                preserveAspectRatio="xMinYMin"
                className="icon__icon"
              >
                <path d="M14.833 5l-.728 13.11A2 2 0 0 1 12.108 20H3.892a2 2 0 0 1-1.997-1.89L1.167 5H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-.167zM12.83 5H3.17l.722 13h8.216l.722-13zM2 2v1h12V2H2zm4 5a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z" />
              </svg>
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
          width: 100%;
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
