import { USER_CART_QUERY } from '../types/generated/USER_CART_QUERY';
import { CartItemType } from '../types/types';
import { getLocalStorage, updateLocalStorage } from './localStorage';

const key = 'localCart';

const getCart = (): USER_CART_QUERY | [] => {
  let localCart: USER_CART_QUERY | [] = [];
  if (typeof Storage !== 'undefined') {
    localCart = getLocalStorage(key);
    // console.log('LOCAL CART', localCart);
  }
  return localCart;
};

const addCartItem = ({
  id,
  variantIds,
}: {
  id: string;
  variantIds: string[];
}): void => {
  updateLocalStorage({
    key,
    value: [{ id, variantIds, quantity: 1 }],
  });
};

const removeCartItem = (cartItem: CartItemType['id']): void => {
  // Remove an item from the local cart
  console.log(cartItem);
};

const incrementCartItem = (): void => {
  // increment a cart item
};
const decrementCartItem = (): void => {
  // decrement a cart item
};

export {
  getCart,
  addCartItem,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
};
