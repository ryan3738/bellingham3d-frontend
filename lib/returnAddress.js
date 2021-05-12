const returnAddress = (returnFunction, address) => {
  if (!returnFunction) {
    console.error('No callback function was supplied');
    return null;
  }
  if (!address) {
    console.error('No address object was supplied');
    return null;
  }
  // function will return address object to a function
  // console.log('Here is the address', address);
  returnFunction(address);
};

export { returnAddress };
