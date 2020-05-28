const evenOdd = (num) =>{
    return num % 2 === 0 ? 'Even' : 'Odd';
}

test('evenOdd', () => {
    expect(evenOdd(3)).toBe('Odd');
    expect(evenOdd(4)).toBe('Even');
})