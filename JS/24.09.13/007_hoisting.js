// 호이스팅 : 변수나 함수 선언문이 해당 스코프의 최상단으로 끌어올려지는 현상
// 예상 못한 현상이 발생할 수 있기 때문에 사용을 지양해야함

/* var a // undefined 초기화
function sayHi() 
  console.log("say Hi"); 
}
맨 위로 끌어올려진 것처럼 동작함.

let b; // 초기화 X -> 사용자가 직접 작성한 선언문 또는 할당문이 실행되기 전에 값에 접근하면 오류 발생
*/

console.log(a); // 선언 전에 참조 -> // undefined
var a = "Hello";
console.log(a); // Hello

sayHi();
function sayHi() {
  console.log("say Hi"); // say Hi
}

// console.log(b);
let b = "World";
// console.log(c);
const c = "Weniv";
console.log(c);

console.log("=== 함수의 호이스팅 ===");

// 함수 선언문 -> 함수의 실행문도 전부 모두 호이스팅되기때문에 실행이 가능하다.
func1();
function func1() {
  console.log("func1");
}

// 함수 표현식 -> 함수식의 호이스팅이 되지않고, 할당된 변수의 호이스팅을 따라간다. 작성된 선언문 이전 호출 불가
// func2(); = undefined()
let func2 = function () {
  console.log("func2");
};
