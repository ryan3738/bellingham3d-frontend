import { array, shape, string } from 'prop-types';

export const addressType = shape({
  id: string,
  firstName: string,
  lastName: string,
  company: string,
  address1: string,
  address2: string,
  city: string,
  region: string,
  country: string,
  zip: string,
  phone: string,
  isDefaultShipping: shape({
    id: string,
  }),
});

export const userType = shape({
  id: string,
  name: string,
  email: string,
  addresses: [addressType],
  defaultShipping: addressType,
  cart: array,
  orders: array,
});
