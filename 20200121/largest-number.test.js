const solution = (numbers) => {
    return numbers.sort(compare)[0] === 0 ? '0' : numbers.join('');
}

const compare = (a, b) => {
    return a +''+ b > b + '' + a ? -1 : 1;
}

test('solution', () => {
    expect(solution([210,2,100])).toBe('2210100');
    expect(solution([6,10,2])).toBe('6210');
})

test('compare', () => {
    expect(compare(9, 5)).toBe(-1);
})
