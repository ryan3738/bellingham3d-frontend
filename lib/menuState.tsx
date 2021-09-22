import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  // Close by default
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function openMenu() {
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
function useMenu() {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { MenuStateProvider, useMenu };
