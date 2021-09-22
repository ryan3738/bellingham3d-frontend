import { createContext, useContext, useState } from 'react';

interface CartContextInterface {
  cartOpen: boolean;
  setCartOpen: (boolean) => void;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
}
const CartContext = createContext<CartContextInterface | null>(null);
const CartProvider = CartContext.Provider;

type AppProps = {
  children?: React.ReactNode;
};

function CartStateProvider({ children }: AppProps): JSX.Element {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  // Close by default
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart(): void {
    setCartOpen(!cartOpen);
  }

  function closeCart(): void {
    setCartOpen(false);
  }

  function openCart(): void {
    setCartOpen(true);
  }

  return (
    <CartProvider
      value={{
        cartOpen,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
      }}
    >
      {children}
    </CartProvider>
  );
}

// make a custom hook for accessing the cart
function useCart(): CartContextInterface {
  // We use a consumer here to access the local state
  const all = useContext(CartContext);
  return all;
}

export { CartStateProvider, useCart };
