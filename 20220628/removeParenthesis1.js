let fs = require("fs");
const expression = fs.readFileSync("./dev/stdin").toString().trim();

// 문제에서 입력된 수식의 문자 정보를 담는 클래스
class Node {
  constructor(id, isValue) {
    this.id = id;
    this.isValue = isValue;
  }
}

// 다음에 발견할 괄호에 부여할 id
let parenthesisId = 1;
// 괄호 짝을 찾기 위한 스택
const stack = [];
// 파싱된 노드 배열
const nodes = [];

// 입력 수식 파싱
for (const c of expression) {
  switch (c) {
    case "(":
      // 여는 괄호의 경우 짝을 찾기 위해 스택에 id를 넣고 노드 변환
      stack.push(parenthesisId);
      nodes.push(new Node(parenthesisId, false));
      parenthesisId += 1;
      break;
    case ")":
      // 다는 괄호의 경우 스택의 top이랑 짝이 됨
      // 여는 괄호와 구분하기 위해 id를 음수화하여 노드 변환
      nodes.push(new Node(-stack.pop(), false));
      break;
    default:
      // 숫자나 연산자는 그대로 노드 변환
      nodes.push(new Node(c, true));
      break;
  }
}

// 괄호를 출력 수식에 사용할지 여부를 갖는 배열
const skipParenthesis = new Array(parenthesisId);

// skipParenthesis를 이용해 출력 수식 구성
function generate() {
  let generated = "";
  for (const node of nodes) {
    if (node.isValue) {
      // 숫자나 연산자의 경우 그대로 출력 수식에 포함
      generated += node.id;
    } else {
      // 괄호의 경우 사용되는지 검사 후 괄호로 변환하여 수식에 포함
      if (skipParenthesis[Math.abs(node.id)]) continue;
      if (node.id > 0) generated += "(";
      else generated += ")";
    }
  }
  return generated;
}

// 중복 제거를 위한 집합 자료구조
const set = new Set();
// 재귀를 이용해 모든 조합 검사
function generateForAllParenthesisCombination(pid) {
  // 종료조건 - 모든 괄호의 사용 여부를 모두 채웠을 때
  if (pid === skipParenthesis.length) {
    // 현재 괄호 사용 여부를 이용해 출력 수식 구성 후 집합에 추가
    set.add(generate());
    return;
  }
  // 한 번은 괄호를 사용하기
  skipParenthesis[pid] = false;
  generateForAllParenthesisCombination(pid + 1);
  // 한 번은 괄호를 사용하지 않기
  skipParenthesis[pid] = true;
  generateForAllParenthesisCombination(pid + 1);
}

// 모든 경우의 수에 대해 출력 수식 생성
generateForAllParenthesisCombination(1);
// 입력과 같은 수식 (괄호를 제거하지 않은 경우) 제거
set.delete(expression);

// 정렬하여 출력
for (const expr of Array.from(set).sort()) {
  console.log(expr);
}
