/*
이해

반려동물 이름을 지어주려고 여러 사람에게 제안을 받아서 목록을
만들었다. 전체 목록에서 어떤 이름이 다른 이름에 일부 포함되거나
중복되는게 있는지 확인하려고 한다.
후보이름을 담은 name_list가 매개변수로 주어질때, 어떤 이름이
다른 이름에 일부라도 포함되거나 중복되는 경우가 있으면
true 그렇지 않으면 false를 리턴해라.

구해야 하는 것
어떤 이름이 다른 이름에 포함되어 있으면 true 아니면 false

계획
이중 for문으로 하나랑 다른 나머지들을 비교해서 inclueds한다.
포함되어있으면 true 아니면 false리턴

*/


const wordConversion = (name_list) => {
    for(let i =0; i<name_list.length; i++) {
        for(let j =0; j<name_list.length; j++) {
            if(i !== j) {
                if(name_list[j].includes(name_list[i])) {
                    return true;
                }
            }
        }
    }
    return false;
}


test('wordConversion', () => {
    expect(wordConversion(["가을", "우주", "너굴"])).toBe(false);
})