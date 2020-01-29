const largest_number = (numbers) => {
    const answer = numbers.sort((a,b) => ((b+''+a)-(a+''+b))).join('');
    return answer[0] === '0' ? '0' : answer;
}

test('largest_number',() => {
    expect(largest_number([6,10,2])).toBe('6210');
    expect(largest_number([3, 30, 34, 5, 9])).toBe('9534330');
});