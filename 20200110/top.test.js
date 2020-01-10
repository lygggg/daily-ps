const top = (heights) => {
    const array = [];
    const all = [];
    for(let i =heights.length-1; i>=0; i--) {
       const fil = heights.filter(e=> e>heights[i]);
        heights.pop();
        console.log(fil[fil.length-1])
        array.push(fil[fil.length-1]);
        all.push(heights.lastIndexOf(fil[fil.length-1])+1)
        console.log(all);
    }
    return all.reverse();
}


test('top', () => {
    expect(top([3,9,9,3,5,7,2])).toEqual([0,0,0,3,3,3,6]);
})
