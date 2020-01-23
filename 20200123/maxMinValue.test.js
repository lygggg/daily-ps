const maxMinValue = (insert) => {
    return `${Math.min(...insert.split(' '))} ${Math.max(...insert.split(' '))}`;
}

test('maxMinValue', () => {
    expect(maxMinValue('1 2 3 4')).toBe('1 4');
    expect(maxMinValue('-1 -2 -3 -4')).toBe('-4 -1');
})

