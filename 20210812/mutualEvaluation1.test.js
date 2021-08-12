
// let solution = scores =>
//     (scores[0].map((_, c) => scores.map(r => r[c])))
//         .map((s, i) => [...s.splice(i, 1), s])
//         .map(([m, s]) => Math.min(...s) <= m && m <= Math.max(...s) ? [m, ...s] : s)
//         .map(s => "FDDCBAA"[Math.max(parseInt(s.reduce((a, c) => a + c) / s.length / 10) - 4, 0)])
//         .join("")
const mutualEvaluation = (scores) => {
    console.log(
    (scores[0].map((_, c) => scores.map(r => r[c])))
        .map((s, i) => [...s.splice(i, 1), s])
        .map(([m, s]) => Math.min(...s) <= m && m <= Math.max(...s) ? [m, ...s] : s)
        .map(s => "FDDCBAA"[Math.max(parseInt(s.reduce((a, c) => a + c) / s.length / 10) - 4, 0)])
        .join(""))
}

test('mutualEvaluation', () => {
    expect(mutualEvaluation([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]])).toBe("FBABD");
    expect(mutualEvaluation([[50,90],[50,87]])).toBe("DA");
    expect(mutualEvaluation([[70,49,90],[68,50,38],[73,31,100]])).toBe("CFD");
})
