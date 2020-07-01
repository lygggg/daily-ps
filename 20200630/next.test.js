/*
이해

자연수 n이 주어졌을 때 n의 다음 큰 숫자는 다음과 같이 정의한다.
1. n의 다음 큰 숫자는 n보다 큰 자연수
2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 n은 2진수로 변환했을 때의
1의 갯수가 같다.
3. n의 다음 큰 숫자는 조건 1,2 를 만족하는 가장 작은 수 입니다.

구해야하는것

n보다 큰수중에 이진수로 변경했을때 n의 이진수 1의 갯수가 같은 수들 중에
가장 작은 수를 구해라.
계획

n을 이진수로 변경한다.
n을 이진수로 만들었을때 갯수를 구하는 테스트를 만든다.
그럼 n을 1씩 증가시키면서 이진수로 만들고 1의 갯수가 n의 이진수 1의
갯수랑 같으면 리턴한다.

영규 기본이네?

우민 껌이였다.
*/

const solution = (n) => {
    const binaryCount = getBinaryOneCount(n);
    while(true) {
        n+=1;
        if(getBinaryOneCount(n) == binaryCount) {
            return n;
        }
    }
};

const getBinaryOneCount = (n) => {
    const binary = n.toString(2);
    return binary.split("").filter(v => v == 1).length;
    
};

test('getBinaryOneCount', () => {
    expect(getBinaryOneCount(78)).toBe(4);
});

test('solution', () => {
    expect(solution(78)).toBe(83)
});
