export default function calcTotalPrice(cart: any): number {
  return cart.reduce((tally, cartItem) => {
    // products can be deleted, but they could still be in your cart
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
