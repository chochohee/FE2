console.log("===== 함수를 선언하는 두 가지 방법 =====");

console.log("1. 함수의 선언문");
function func1(x, y) {
  console.log(x, y);
  return x + y;
}
func1(2, 3);

console.log("2.함수 표현식");
const func2 = function (x, y) {
  console.log("func2", x, y);
  return x + y;
};
func2(3, 5);

console.log("=== 화살표 함수===");
const func3 = (x, y) => {
  console.log("func3", x, y);
  return x + y;
};

func3(10, 20);

const func4 = (x, y) => x + y;
console.log("화살표함수:", func4(10, 20));

// 다음 두 함수를 화살표 함수로 변환하세요.

/* function multiply(a, b){
  return a * b
}


function squareRoot(num) {
  return num ** 0.5;
} */

const multiply = (a, b) => a * b;
const squareRoot = (num) => num ** 0.5;

console.log("multiply", multiply(5, 8));
console.log("squareRoot", squareRoot(5));
