const removeSmallestNumber1 = (arr) => {
    const min = Math.min.apply(null, arr);
    if(arr.length == 1){
        return [-1];
    }
    return arr.filter(e=> { if(min<e) {
        return e;
    }
});
}
const removeSmallestNumber2 = (arr) => {    
    return arr.length === 1 ? [-1] : arr.filter(v => v > Math.min(...arr));
}

test('removeSmallestNumber', () => {
    [removeSmallestNumber1,removeSmallestNumber2].forEach(rsn => {
        expect(rsn([4,3,2,1])).toEqual([4,3,2]);
    })
})