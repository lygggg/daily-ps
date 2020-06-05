const findPrimeNumber = (n) => {
    const arr = new Array(n).fill().map((_,i) => i+1) ;
    for(let i =2; i<=Math.floor(Math.sqrt(n)); i++) {
        if(arr[i+1] == false) {
            continue;
        }
        for(let e =i+i; e<=n; e+=i) {
            arr[e-1] = false;
        }
    }
    arr.shift()
    return arr.filter(e => e !== false).length
}

test('findPrimeNumber', () => {
    expect(findPrimeNumber(10)).toBe(4)
})