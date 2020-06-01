/*
이해
data[n,m]일때 가로의 길이가 n 세로의 길이가 m인 직사각형을 출력하라.

계획
for문으로 2중 for문으로 별을 찍는다.
*/

const makeStar = (data) => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const arr = new Array(a).fill('*');
    for(let i = 0; i<b; i++) {
        console.log(arr.join(''));
        }
}
