// 문제 : 회사 게시판에는 총 6개의 게시물이 있고, 각각의 게시물에 게시자 데이터를 뽑은 것이 '회사게시판 변수이다.'
const board = ["라이캣", "라이캣", "라이캣", "빙키", "소울곰", "뮤라"];

// 1. 게시글을 작성한 사용자 수
const set = new Set(board);
console.log(set.size);

// 2. 각자 몇개의 게시글을 작성했는지
let boardCount = new Map();
let count = 0;
for (el in board) {
  if (!boardCount.has(board[el])) {
    count = 1;
  } else {
    count++;
  }
  boardCount.set(board[el], count);
}

console.log(boardCount);

// 2-1. board를 이용
const mapUsingSet = new Map();
for (const name of board) {
  console.log(name, board.filter((el) => el === name).length);
  mapUsingSet.set(name, board.filter((el) => el === name).length);
}

// 2-2 board 순회
const mapUsingIter = new Map();
// 배열인 board를 순회하는 방법은 다양
// forEach, for of(요소), for in(인덱스)

for (const name of board) {
  //Map에 요소가 있으면 1을 추가 / 없으면 1
  console.log(name);
  console.log(
    mapUsingIter.has(name)
      ? mapUsingIter.set(name, mapUsingIter.get(name) + 1)
      : mapUsingIter.set(name, 1)
  );
}
