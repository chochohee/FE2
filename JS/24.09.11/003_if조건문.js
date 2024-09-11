// 조건문

let isGreen = false;

if (isGreen) {
  console.log("횡단보도를 건너세요!");
} else {
  console.log("멈추세요!");
}

// if 조건문
if (true) {
  console.log("이 코드는 항상 실행됩니다!");
}
if (false) {
  console.log("이 코드는 실행되지 않습니다.");
}

let age = 24;
if (age > 20) {
  console.log("입장이 가능합니다.");
}

let name = "Hello";
if (name) console.log(`${name}님 안녕하세요`); // 코드가 한줄인 경우 중괄호 생략 가능

console.log("--- if - else ---");
if (name) {
  console.log(`${name}님 안녕하세요`);
} else {
  console.log("이름을 입력하세요");
}

let x = 5;
let y = 10;

if (x === y) {
  console.log("x와 y가 같습니다.");
} else {
  console.log("x와 y가 다릅니다");
}

if (x === y) {
  console.log("x와 y가 같습니다.");
} else {
  if (x > y) {
    console.log("x가 y보다 큽니다.");
  } else {
    console.log("x가 y보다 작습니다");
  }
}

console.log("--- else if ---");
if (x === y) {
  console.log("x와 y가 같습니다.");
} else if (x > y) {
  console.log("x가 y보다 큽니다");
} else console.log("x가 y보다 작습니다");

//조건식은 윗부분부터 해당하는 부분을 탐색하기 시작하며, 맞는 부분이 발생되면 해당 결과를 반환하고 if문을 나간다. 작성시 주의할것
let score = 80;
let grade;
if (score > 90) {
  grade = "A";
} else if (score > 80) {
  // score가 90보다 작거나 같다
  grade = "B";
} else if (score > 70) {
  // score가 80보다 작거나 같다
  grade = "C";
} else if (score > 60) {
  // score가 70보다 작거나 같다
  grade = "D";
} else {
  // score가 60보다 작거나 같다
  grade = "F";
}

console.log(`점수는 ${grade}`);

let month = "1";
let season;
if (month >= 3 && month <= 5) {
  season = "봄";
} else if (month >= 6 && month <= 8) {
  season = "여름";
} else if (month >= 9 && month <= 11) {
  season = "가을";
} else {
  season = "겨울";
}

console.log(`${month}월은 ${season}입니다.`);
