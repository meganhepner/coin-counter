import coinCounter from './../src/coinCounter.js';

// describe('CoinCounter', () => {
//   test('should correctly parse cents from dollars', () => {
//     const money = 4.99;
//     expect(cents).toEqual(.99);
//   });
// });

describe('CoinCounter', () => {
  test('should determine how many quarters fit in input', () => {
    const cents = 99;
    expect(coinCounter(cents)).toEqual(3);
  });
});