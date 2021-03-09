import Link from 'next/link';
import Image from 'next/image';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import EditButton from './EditButton';
import { useUser } from './User';

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

        .productWrapper :hover{
          opacity: .5;
        }

.productText{
  font-size: 1.5rem;
  font-weight: bold;

  padding: calc(var(--spacing)/2) 0;

}
         {
          /* #image-div {
          display: inline-block;
          height: auto;
          max-width: 360px;
          width: 100vw;
          border: 0px solid red;
          padding: 5px;
        } */
        }
        img {

          max-height: 240px;
          width: 100%;
          height: auto;
          object-fit: cover;


        }


        /*
        .buttonList {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
          grid-gap: 1px;
          background: var(--lightGray);
          */

          /*
    & > * {
        display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      border: 0;
      font-size: 1rem;
      padding: var(--spacing);
    }
    */
        }
      `}</style>
    </div>
  );
}
