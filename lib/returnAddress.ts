import { AddressType } from '../types/types';

interface ReturnAddressInterface {
  returnFunction: (address: AddressType) => void;
  address: AddressType;
}

const returnAddress = ({
  returnFunction,
  address,
}: ReturnAddressInterface): void => {
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
