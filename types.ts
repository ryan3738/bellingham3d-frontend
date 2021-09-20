// export type DefaultShipping = {
//   id: string;
//   firstName:;
//   lastName;
//   company;
//   address1;
//   address2;
//   city;
//   region;
//   country;
//   zip;
//   phone;
//   isDefaultShipping: User;
// };

export type Address = {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  region: string;
  country: string;
  zip: string;
  phone: string;
  isDefaultShipping: User;
};

export type CartItem = {
  id: string;
  quantity?: number;
  // product?: Product;
  productId?: string;
  // variants: Variant[];
  saveForLater?: boolean;
  // createdAt?: DateTime;
  // user?: User;
  userId?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  addresses: Address[];
  defaultShipping: Address;
  cart: CartItem[];
  role: string;
  createdAt: string;
};

export type CloudinaryImage = {
  publicUrlTransformed: string;
};

export type ProductImage = {
  id: string;
  image: {
    publicUrlTransformed: string;
  };
  altText: string;
  createdAt: string;
};
