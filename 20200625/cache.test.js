// # [캐시](https://programmers.co.kr/learn/courses/30/lessons/17680)
// ## 이해
// cachSize라는 캐시크기가 주어지고, cities라는 도시이름이 주어진다.  도시이름 배열은 특수문자 대소문자 구별이 없는 문자열 배열이고, LRU알고리즘을 통해서 실행 시간을 검사하는데 캐시가 저장된 문자열 이라면 실행시간은 1 아니라면 5 실행시간이 걸린다.
// ## 계획
// count를 만들고 캐시라는 배열을 만들고 도시이름 배열의 문자열을 모두 대문자로 바꾸고 하나씩 가져오면서 캐시크기 만큼 넣는다.
// 만약 넣을 문자열이 캐시에 없으면 5 있으면 1을 증가시키는 조건을 정해주고
// 배열이 다 찼으면 최근에 제일 사용되지 않은 도시를 뽑고 방금 조회한 도시를 뒤에다가 넣는다.
// 도시이름들을 다 조회했다면 count를 return 한다.
// ## 회고
// 영규: 숨겨진 엣지 케이스가 있는 문제였다. 재미있게 풀었다.
// 기봉: 오늘도 즐거운 짝프로그래밍이였다.



const solution = (cacheSize, cities) => {
    let count = 0;
    let cache = [];
    cities = cities.map(e => e.toUpperCase());
    for (let i = 0; i < cities.length; i++) {
        //cache에 cities[i]가 있으면  count +1 cache 에 있는 cities[i]를 slice하고 뒤에다가 붙여준다.\
        if(cache.includes(cities[i])) {
            count += 1;
            cache.splice(cache.indexOf(cities[i]),1);
            cache.push(cities[i]);
        } else {
            //cache에 cities[i]가 없으면 count +5를 해준다.
            count += 5;
            if(cache.length === cacheSize) {
                cache.shift();
            }
            if(cache.length+1 <= cacheSize) {
                cache.push(cities[i]);
            }
            //cache 가 다 차있으면 shift하고 push를 해준다
            //cache 가 다 차있지 않다면 push 만 해준다.
        }
        console.log(cache, count)
    }
    return count;
}
test('solution', () => {
    // expect(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toBe(50);
    // expect(solution(3, ["Jeju", "Pangyo", "Seoul","Jeju", "Pangyo", "Seoul","Jeju", "Pangyo", "Seoul" ])).toBe(21);
    expect(solution(0, ["Jeju", "Pangyo","Jeju","Pangyo","seoul","pangyo" ])).toBe(30);
});