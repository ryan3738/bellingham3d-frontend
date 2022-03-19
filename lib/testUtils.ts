import casual from 'casual';
import { PAGINATION_QUERY } from '../components/Products/Pagination';
import { OrderItemType, ProductType, UserType } from '../types/types';

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

const fakeUser = (overrides): UserType => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  permissions: ['ADMIN'],
  orders: [],
  cart: [],
  ...overrides,
});

const fakeOrderItem = (): OrderItemType => ({
  // __typename: 'OrderItem',
  id: casual.uuid,
  images: {
    image: `${casual.word}.jpg`,
  },
  name: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
});

const fakeOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: '2022-12-11T20:16:13.797Z',
  user: fakeUser(null),
});

const fakeCartItem = (overrides) => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  product: fakeProduct(),
  user: fakeUser(null),
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
