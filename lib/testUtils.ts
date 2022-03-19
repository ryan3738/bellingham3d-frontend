import casual from 'casual';
import { PAGINATION_QUERY } from '../components/Products/Pagination';
import {
  CartItemType,
  OrderItemType,
  OrderType,
  ProductType,
  UserType,
} from '../types/types';

// seed it so we get consistent results
casual.seed(777);

const fakeProduct = (): ProductType => ({
  __typename: 'Product',
  id: 'abc123',
  price: 5000,
  // status: 'AVAILABLE',
  variants: [],
  images: [
    {
      __typename: 'ProductImage',
      // id: 'abc123',
      altText: 'dogs are best',
      image: {
        __typename: 'CloudinaryImage_File',
        publicUrlTransformed: '/dog.jpg',
      },
    },
  ],
  name: 'dogs are best',
  description: 'dogs',
});

const fakeUser = (overrides?: UserType): UserType => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  role: ['ADMIN'],
  // orders: [],
  cart: [],
  ...overrides,
});

const fakeOrderItem = (): OrderItemType => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  image: {
    __typename: 'ProductImage',
    id: 'abc123',
    altText: 'dogs are best',
    image: {
      id: 'abc123',
      __typename: 'CloudinaryImage_File',
      publicUrlTransformed: `${casual.word}.jpg`,
    },
  },
  name: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
});

const fakeOrder = (): OrderType => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: '2022-12-11T20:16:13.797Z',
  shippingAddress: {
    __typename: 'CustomerAddress',
    id: casual.uuid,
    firstName: casual.first_name,
    lastName: casual.last_name,
    company: casual.company_name,
    address1: casual.address1,
    address2: casual.address2,
    city: casual.city,
    region: casual.state_abbr,
    country: casual.country,
    zip: casual.zip({}),
    phone: casual.phone,
  },
  // user: fakeUser(),
});

const fakeCartItem = (overrides?: CartItemType): CartItemType => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  product: fakeProduct(),
  // user: fakeUser(),
  ...overrides,
});

// Fake LocalStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

function makePaginationMocksFor(length) {
  return [
    {
      request: { query: PAGINATION_QUERY },
      result: {
        data: {
          _allProductsMeta: {
            count: length,
          },
          itemsConnection: {
            __typename: 'aggregate',
            aggregate: {
              count: length,
              __typename: 'count',
            },
          },
        },
      },
    },
  ];
}

export {
  makePaginationMocksFor,
  LocalStorageMock,
  fakeProduct,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem,
};
