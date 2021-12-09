import { useEffect, useState } from 'react';

const ClientOnly = function ({ children, ...delegated }): JSX.Element {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
// then wrap Search

/* <ClientOnly>
  <Search />
</ClientOnly>; */
