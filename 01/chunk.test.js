const chunkArray = require("./chunk");

test("chunkArray function exists", () => {
  expect(chunkArray).toBeDefined();
});

test('Cuts array with 11 in chunks of length 3', () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const expectedOutput = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11]];
  const length = 3;
  expect(chunkArray(input, length)).toEqual(expectedOutput);
})
