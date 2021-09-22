import { createContext, useContext, useState } from 'react';

interface CartContextInterface {
  menuOpen: boolean;
  setMenuOpen: (boolean) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}

const LocalStateContext = createContext<CartContextInterface | null>(null);
const LocalStateProvider = LocalStateContext.Provider;

type AppProps = {
  children?: React.ReactNode;
};

function MenuStateProvider({ children }: AppProps): JSX.Element {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  // Close by default
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu(): void {
    setMenuOpen(!menuOpen);
  }

  function closeMenu(): void {
    setMenuOpen(false);
  }

  function openMenu(): void {
    setMenuOpen(true);
  }

  return (
    <LocalStateProvider
      value={{
        menuOpen,
        setMenuOpen,
        toggleMenu,
        closeMenu,
        openMenu,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the menu
function useMenu(): CartContextInterface {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { MenuStateProvider, useMenu };
