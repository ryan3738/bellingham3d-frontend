import { USER_CART_QUERY } from '../types/generated/USER_CART_QUERY';
import { getLocalStorage, updateLocalStorage } from './localStorage';

const key = 'localCart';
const localCart: USER_CART_QUERY | [] = [];

const getCart = (): USER_CART_QUERY | [] => {
  if (typeof Storage !== 'undefined') {
    const cart = getLocalStorage(key);
    console.log('LOCAL CART', cart);
  } else {
    console.log('Sorry! No Web Storage support..');
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
    value: { cart: [{ id, variantIds, quantity: 1 }] },
  });
};

const removeCartItem = (item) => {};

const incrementCartItem = () => {};
const decrementCartItem = () => {};

export {
  getCart,
  addCartItem,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
};
