function completeSearch() {
   // 완전 탐색 자료구조 - DFS(Stack), BFS(Queue)
   // 앞으로 탐색해야할 상태를 담고 있음
   const stack = [];
   // 초기 상태 삽입
   stack.push(new State());
   // 문제에서 주어진 크기에 따라 방문 검사 배열 정의
   // State가 포함하는 변수의 개수에 따라 차원의 수가 결정됨
   const isVisited = new Array(100).fill(false);
   isVisited[초기상태] = true;

   // 탐색할 상태가 남아있는 동안 계속 검사
   while (stack.length !== 0) {
       // 현재 방문할 상태
       const state = stack.pop();


       // state에 대한 처리

       for (const nextState of /* 다음 상태 들 */) {
           if (!/* 범위 검사 */) {
               continue;
           }
           if (!/* 유효성 검사 */) {
               continue;
           }
           if (isVisited /* 중복 검사 */) {
               continue;
           }

           // 방문 처리
           // 완전 탐색 자료구조에 넣어줬다.
           isVisited/* */ = true;
           stack.push(nextState);
       }
   }
}

