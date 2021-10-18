import formatMoney from '../lib/formatMoney';

describe('Format money function', () => {
  it('0 or null entered returns "$0"', () => {
    expect(formatMoney(0)).toBe('$0');
    expect(formatMoney(null)).toBe('$0');
    expect(formatMoney()).toBe('$0');
    expect(formatMoney(undefined)).toBe('$0');
  });

  it('Works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(10)).toEqual('$0.10');
    expect(formatMoney(9)).toEqual('$0.09');
    expect(formatMoney(40)).toEqual('$0.40');
  });

  it('Leaves off cents when its whole dollars', () => {
    expect(formatMoney(5000)).toEqual('$50');
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(50000000)).toEqual('$500,000');
  });

  it('Works with whole and fractional dollars', () => {
    expect(formatMoney(140)).toEqual('$1.40');
    expect(formatMoney(5012)).toEqual('$50.12');
    expect(formatMoney(101)).toEqual('$1.01');
    expect(formatMoney(110)).toEqual('$1.10');
    expect(formatMoney(5012)).toEqual('$50.12');
  });
});
