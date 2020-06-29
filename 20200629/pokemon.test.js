/*
이해

총 n 마리에서 n/2마리의 포켓몬을 가져갈 수있다.
같은 종류의 포켓몬은 같은 번호를 가지고있다.


계획

nums의 길이의 /2 만큼 nums를 인덱스 0부터 차례대로 넣는데,
중복값이면 넣지않는다.
*/

const pokemon = (nums) => {
    const arr = new Set(nums);
    if(nums.length/2 <= arr.size) {
        return nums.length/2;
    }
    return arr.size;
}

test('pokemon', () => {
    expect(pokemon([3,1,2,3])).toBe(2);
    // expect(pokemon([3,3,3,2,2,4])).toBe(3);

})