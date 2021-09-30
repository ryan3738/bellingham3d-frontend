import { createContext, useContext, useState } from 'react';

interface MenuContextInterface {
  menuOpen: boolean;
  setMenuOpen: (boolean) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
  tab: number;
  setTab: (number) => void;
}

const MenuContext = createContext<MenuContextInterface | null>(null);
const MenuProvider = MenuContext.Provider;

type AppProps = {
  children?: React.ReactNode;
};

function MenuStateProvider({ children }: AppProps): JSX.Element {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  // Close by default
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState(0);

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
    <MenuProvider
      value={{
        menuOpen,
        setMenuOpen,
        toggleMenu,
        closeMenu,
        openMenu,
        tab,
        setTab,
      }}
    >
      {children}
    </MenuProvider>
  );
}

// make a custom hook for accessing the menu
function useMenu(): MenuContextInterface {
  // We use a consumer here to access the local state
  const all = useContext(MenuContext);
  return all;
}

export { MenuStateProvider, useMenu };
