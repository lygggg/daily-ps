
const getAverage = (arr) => {
    return arr.reduce((a, b) => a + b)/arr.length;
}


test('getAverage', () => {
expect(getAverage([1,2,3,4])).toBe(2.5);
})