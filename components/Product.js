import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import EditButton from './EditButton';

export default function Product({ product }) {
  return (
    // ? is "nested chaining" that checks for item at each level
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        {/* <EditButton id={product.id} /> */}
        <AddToCart id={product.id} />
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
      </div>
    </ItemStyles>
  );
}
