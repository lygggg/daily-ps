// const solution = (n, m) => [gcd(n, m), (n, m) / gcd(n, m)]

// const gcd = (n, m) =>
// Math.max(...commonDivisors(n).filter(x => commonDivisors(m).includes(x)));

// const commonDivisors = (n) => {
// // Array(n).fill().map((_, i) => i + 1).filter(x => n % x === 0);
//     console.log(Array(n).fill().map((_, i) => i+8)
//     );
// }
// test('solution', () => {
//     [solution].forEach(solution =>
//         expect(solution(3, 12).toEqual([3, 12])));
// });


// const array1 = Array(5).fill(5);
// console.log(array1[3]);
// const array2 = Array.from(new Array(5));
// console.log(array1[0]);
// const array3 = Array.from(Array(5), (x,index) => index +1);
// console.log(array3);

// const array4 = [...new Array(5)];
// console.log(array4);
// const string = 'String';
// const array = [1,2,3];
// console.log([...string]);
// console.log([...array.entries()]);
// test('commonDivisors',() => {
//     expect(commonDivisors(3)).toEqual([1,3]);
// })


const commonDivisors = (n) => {
    let f;
    let final;
    for(let i=0; i<=n; i++){
        if(i*i==n){
            f = i+1;
            final= f*f;
            break;
        }
        else{
            final = -1;
        }
    }
    return final;
}
test('commonDivisors',() => {
    expect(commonDivisors(121)).toBe(144);
})