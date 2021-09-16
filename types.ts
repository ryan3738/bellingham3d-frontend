export type isDefaultShipping = {
  id: string;
  isDefaultShipping: boolean;
};

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
  isDefaultShipping: isDefaultShipping;
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


