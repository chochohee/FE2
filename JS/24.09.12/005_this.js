// "use strict"; // 엄격모드 -> this undefined
console.log(" === 1. 전역 범위 ===");
console.log(this); // 전역 범위에서 this -> 전역 객체(window)

function func1() {
  console.log(this);
}

console.log("=== 2. 일반 함수 호출 ===");
func1(); // 일반 함수 호출 -> this가 전역 객체(window)

console.log("=== 3. 메서드 호출 ===");
// 함수가 객체 내의 프로퍼티 값이면 메서드로써 호출된다.
// 메서드로 호출을 할 때는 객체를 나타낸다.
const obj = {
  name: "obj",
  type: "objct",
  func1: func1, // 미리 선언해놓은 함수를 사용
};

obj.func1(); // this는 obj

const obj2 = {
  name: "obj2",
  type: "object",
  func1: function () {
    console.log("function1:", this); // obj2

    function func2() {
      console.log("function2:", this); // window
    }
    func2();
  },
};

obj2.func1();

const func3 = obj2.func1;
func3();

console.log("=== 3. 화살표 함수 ===");

console.log("--- 화살표단독 ---");

const arrowFunction = () => {
  console.log("arrowFunction:", this);
};
arrowFunction(); // 전역객체(window);

console.log("---메서드와 함께---");
const obj3 = {
  name: "obj3",
  func1: function () {
    const arrowFunc = () => {
      console.log("arrow:", this);
    };

    const innerFunc = function () {
      console.log("inner:", this);
    };
    arrowFunc(); // obj3
    innerFunc(); // 전역객체(window)
  },
};

obj3.func1();

const button = document.getElementById("click-btn");
console.log(button);
button.addEventListener("click", function () {
  //이벤트 핸들러 함수
  console.log("이벤트:", this); // 이벤트가 등록된 객체
  this.style.background = "pink";
});

// 화살표 함수 -> 선언된 위치를 기준으로 스코프에 해당하는 객체를 갖게됨.
// 이벤트 함수 내에서 화살표 함수를 사용하게 되면, 전역객체를 갖게된다.

console.log("=== 4. 생성자 함수 ===");
function person(name) {
  this.name = name;
  console.log(this); // 새롭게 만들어질 인스턴스를 가르키게됨
}
const person1 = new person("hello");
console.log(person1);
