/*
문제설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때
 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때,
 전화번호의 뒷 4자리를 제외한 나머지 숫자를
  전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
*/
const hideCellPhoneNumber = (phone_number) => {
    const star = starPrint(phone_number);
    const numbers = numbersPrint(phone_number);
    return star+numbers;
}

const starPrint = (phone_number) => {
    let star = '*'
    let numbers= star.repeat(phone_number.length-4)
    return numbers;
}

const numbersPrint = (phone_number) => {
    return phone_number.slice(-4);
}

test.only('hideCellPhoneNumber',() => {
    expect(hideCellPhoneNumber('01033334444')).toBe('*******4444');
    expect(hideCellPhoneNumber('027778888')).toBe('*****8888');
})

test('starPrint',() => {
    expect(starPrint('01033334444')).toBe('*******');
})

test('numbersPrint',() => {
    expect(numbersPrint('01033334444')).toBe('4444');
})

