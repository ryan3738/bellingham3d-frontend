const returnAddress = (returnFunction, address) => {
  console.log('Here is the address', address);
  returnFunction(address);
};

export { returnAddress };
