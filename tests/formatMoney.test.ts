import formatMoney from '../lib/formatMoney';

describe('Format money function', () => {
  it('Works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(10)).toEqual('$0.10');
    expect(formatMoney(9)).toEqual('$0.09');
    expect(formatMoney(40)).toEqual('$0.40');
    expect(formatMoney(140)).toEqual('$1.40');
  });

  it("Leaves off cents when it's whole dollars", () => {
    expect(formatMoney(5000)).toEqual('$50');
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(50000000)).toEqual('$500,000');
  });
});

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
