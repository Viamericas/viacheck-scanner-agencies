import Sum from '../src/core/business/rules/sum';

describe('core/rules', () => {
  describe('sum.js', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(Sum(1, 2)).toBe(3);
    });
  });
});
