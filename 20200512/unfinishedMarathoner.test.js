 /*
이해
- 단 한명의 선수를 제외하고 모든
선수가 마라톤을 완주했다.

- 마라톤에 참여산 선수들의 이름이 담긴 배열 participant,
완주한 선수들의 이름이 담긴 배열 completion
완주하지 못한 선수의 이름을 리턴해라.

구해야하는것
완주하지 못한 선수의 이름을 return

계획
participant의 값들 completion값을 for문으로 한번씩 돌리면서
participant에 값이 있으면 해당 객체 +1 completion에 값이 있으면 -1해주고
마지막으로 +1이 있는 결과물들을 가져와서 리턴한다.
 */

const unfinishedMarathoer = (participant, completion) => {
    let player = {};
    for(let i=0; i<participant.length; i++){
        if(!player[participant[i]]){
        player[participant[i]] = 1;
        } else {
            player[participant[i]] += 1;
        }
        if(!player[completion[i]]){
            player[completion[i]] = -1;
        } else {
            player[completion[i]] -= 1;
        }
    }
    return Object.keys(player).filter(x=> player[x] === 1)[0];
}

 test('unfinishedMarathoner', () => {
     expect(unfinishedMarathoer(["leo", "kiki", "eden"],["eden", "kiki"])).toBe('leo');
     expect(unfinishedMarathoer(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"])).toBe('vinko');
     expect(unfinishedMarathoer(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"])).toBe('mislav');
 })

 
