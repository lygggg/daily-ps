const correctBracket = (s) => {
    const sArray = s.split('');
    let left = 0;
    let right = 0; 
    if(sArray[0] === ')') {
            return false;
        }
    for(let i = 0; i < sArray.length; i++) {
        if(sArray[i] === '(') {
            left++;
    }
    else {
        right++;
    }
    if(right > left) {
        return false;
    }
}
if(right !== left) {
    return false;
}
return true;
}

test('correctBracket', () => {
    expect(correctBracket('(()(')).toBe(false);
})