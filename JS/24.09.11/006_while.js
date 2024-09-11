console.log("=== while ===");

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// while이 종료될 때는 조건식이  False가 될 때

console.log("=== do-while문===");
// 최소 한 번의 실행을 보장
i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

/* let input;
do {
  input = window.prompt("숫자를 입력하세요");
} while (isNaN(input)); */
// 조건문이 참일 때 반복한다.

//사용자의 입력한 값이 '종료'일 때까지 입력을 받고, '종료'가 들어오면 지금까지 입력받은 모든 값을 출력
let result = [];
let end;
do {
  result.push((end = window.prompt("'종료'를 입력하세요.")));
} while (end != "종료");
console.log(result);
