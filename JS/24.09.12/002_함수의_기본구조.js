// f(x) = x^2 + x+1;

function 라면끓이기() {
  console.log("---------");
  let 라면그릇;

  console.log("물 550ml를 끓인다");
  console.log("분말 스프와 후레이크를 먼저 넣습니다.");
  console.log("면을 넣고 4분을 끓입니다.");

  라면그릇 = "맛있는 라면";
  return 라면그릇;
}

console.log(라면끓이기());

console.log("===== 함수의 구조 =====");
function sum(
  num1 = 0,
  num2 = 0 // 매개변수(파라미터)
) {
  return num1 + num2;
}
console.log(sum(10, 20)); // 전달인자(아규먼트)

function greeting(name) {
  console.log(`Hello, I'm ${name}`);
}

greeting("Licat");

console.log("===== Parameter와 Argument의 특징 =====");
console.log(sum(10, 20, 30, 40)); //파라미터의 < 아규먼트 : 초과된 인자는 무시
console.log(sum(50)); //num1(50), num2(undefined) -> 50 + undefined == NaN
// 파라미터 = 0을 통해, 값이 들어오지 않았을 때의 예외적용

console.log("===== 값에 의한 전달 =====");
// 타입 (1) 원시타입 (2) 객체타입
function add(num) {
  num += 10;
  console.log(num);
}

let a = 10;
add(a);
console.log(a);

function getJob(obj) {
  obj.company = "weniv";
  console.log(obj);
}

const user = {
  name: "licat",
  location: "jeju",
};
getJob(user);
console.log(user);

console.log("===== 반환값 =====");
// input -> 처리 -> output
// return 뒤에 반환값을 작성
function mul(a, b) {
  return a * b; 
}
mul(10, 2);
console.log(mul(10, 2)); // console.log(20);

function sub(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
}
console.log(sub(10, 5)); // 반환값이 없는 경우 : 암묵적으로 undefined 반환

//
function printFunc(num) {
  console.log(num);
  return 100;
}
console.log(printFunc(200) + printFunc(300));

function returnIf(num) {
  if (isNaN(num)) return;

  // num이 NaN이 아닐 때 실행될 코드
}

// 로그인하는 과정
// 1. 사용자의 id와 비밀번호를 가져와야 한다.
function getIdPw(id, pw) {
  console.log("사용자 정보 가져오기", id, pw);
}

// 2. 입력값 검증
function inputValidation(id, pw) {
  console.log("입력값의 유효성 검증");
}

// 3. 유저 정보를 가진 서버에 데이터를 전송
function sendUserInfo(id, pw) {
  console.log("유저 저보를 서버에 전송");
}

// 4. redirect (로그인을 완료시키고 메인페이지로 이동)
function redirectMainPage() {
  console.log("로그인을 완료하고 메인페이지로 이동합니다");
}

let id = "licat";
let pw = 1234;

getIdPw(id, pw);
inputValidation(id, pw);
sendUserInfo(id, pw);
redirectMainPage();

// 사칙연산 만들어보기
function sum(num1 = 0, num2 = 0) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  return num1 + num2;
}

function sub(num1 = 0, num2 = 0) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  return num1 - num2;
}

function mul(num1 = 1, num2 = 1) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  return num1 * num2;
}

function div(num1 = 1, num2 = 1) {
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
  return num1 / num2;
}

// 계산기 만들어보기
function calc(op, num1, num2) {
  if (op === "+") {
    console.log(`${num1 + num2}`);
  } else if (op === "-") {
    console.log(`${num1 - num2}`);
  } else if (op === "*") {
    console.log(`${num1 * num2}`);
  } else if (op === "/") {
    console.log(`${num1 / num2}`);
  } else console.log("입력한 값을 확인해주세요.");
}

calc("+", 5, 3);
