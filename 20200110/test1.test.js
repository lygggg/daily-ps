/*
1. 스파크 > 라이트닝> 썬더순 으로 배울수있다 
2. 위 순서에 없는 다른 스킬들은 순서에 상관없이 배울 수 있다.
3. 입력값은 선행스킬 순서 skill, 스킬트리를 담은 배열 skill_trees가 주어진다.
4. 스킬은 모두 대문자.
5. 스킬 순서와 스킬트리는 문자열로 표기 C>B>D 면 CBD로 표기
6. 가능한 스킬트리 개수를 리턴한다

계획
1. CBD를 배열로 만들어준다.
2. CBD배열의 앞부터 스킬트리랑 비교하면서 C가 나오기전에 BD가 나오면 패스
3. 무사히 배열을 통과하면 +1
*/
const skill1 = (skill,skill_trees) => {
    const str = skill.split('');
    
    const str1 = (skill_trees.map(e=> {
        console.log(str1);
        return e.split('');
    }))
    console.log(str1);
    str.map(e=> {
        for(let i=1; i<str1[i].length; i++) {
            const str2 = str1[i]
            console.log(str2);
        }
    })
    return 2;
}


test('skill1', () => {
    expect(skill1('CBD',["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
})
