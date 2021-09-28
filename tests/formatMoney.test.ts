import formatMoney from '../lib/formatMoney';

test('No value entered returns "$0"', () => {
  expect(formatMoney()).toBe('$0');
});

test('0 entered returns "$0"', () => {
  expect(formatMoney(0)).toBe('$0');
});

test('3000 entered returns "$30.00"', () => {
  expect(formatMoney(3000)).toBe('$30');
});

test('30 entered returns "$.30"', () => {
  expect(formatMoney(30)).toBe('$0.30');
});

test('If a non neumeric value is entered', () => {
  expect(formatMoney('acd')).toBe('$0.30');
});

// test('two plus two', () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });
