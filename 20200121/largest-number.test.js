const solution = (numbers) => {
console.log(numbers.sort(compare))
   numbers.sort(compare)[0] === 0 ? '0' : numbers.join('');
}

const compare = (a, b) => {
    console.log((a + '' + b > b + '' + a) ? -1 : 1);
   return (a + '' + b > b + '' + a) ? -1 : 1
}

test('solution', () => {
    expect(solution([100,0,2])).toBe('2102100');
    expect(solution([6,10,2])).toBe('6210');
})

test('compare', () => {
    expect(compare(9, 5)).toBe(-1);
})
