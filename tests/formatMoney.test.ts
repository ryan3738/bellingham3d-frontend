import formatMoney from '../lib/formatMoney';

test('No value entered returns "$0"', () => {
  expect(formatMoney()).toBe('$0');
});

test('0 or null entered returns "$0"', () => {
  expect(formatMoney(0)).toBe('$0');
  expect(formatMoney(null)).toBe('$0');
});

test('3000 entered returns "$30.00"', () => {
  expect(formatMoney(3000)).toBe('$30');
});

test('30 entered returns "$.30"', () => {
  expect(formatMoney(30)).toBe('$0.30');
});
