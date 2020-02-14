function solution(skill, skill_trees) {
    console.log(
    skill_trees
        .map(v => v.replace(new RegExp(`[^${skill}]`, 'g'), ''))
        .filter(s => skill.startsWith(s)).length
    );
}