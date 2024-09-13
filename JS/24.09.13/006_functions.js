console.log("=== 콜백 함수 ===");
function func1() {
  return 100;
}
console.log(func1()); // 함수가 값으로 평가될 수 있다.

let x = func1();

console.log("=== 재귀 함수 ===");
// 자기자신을 호출하는 함수

// factorial = n*(n-1)*(n-2)*...*1
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// sigma(n) = n+ sigma(n-1)

function sigma(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sigma(n - 1);
}
console.log(sigma(5));
// sigma(5) == 5 + sigma(4); -> 5+10 = 15
// sigma(4) == 4 + sigma(3); -> 4+6 = 10
// sigma(3) == 3 + sigma(2); -> 3+3 = 6
// sigma(2) == 2 + sigma(1); -> 2+1 = 3
// sigma(1) == 1

console.log("=== 3. 즉시 실행 함수 ===");
// let, const
// 선언과 동시에 호출하는 함수 -> 외부에서 함수를 호출할 수 없다
//일반적으로 익명함수로 사용, 기명도 가능하지만 호출이 불가하다.

const result = (function () {
  let a = 1;
  let b = 2;
  return a + b;
})();
console.log(result);

console.log("=== 4. 생성자 함수 ===");

const book = {
  title: "JavaScript Essentials",
  price: 15000,
  author: ["wade", "hati"],
};

function Book(title, price, author) {
  this.title = title;
  this.price = price;
  this.author = author;
  this.publish = "위니북스";
}

const book1 = new Book("JS", 15000, ["wade", "hati"]);
const book2 = new Book("HTML/CSS", 20000, ["rosy", "zeezee"]);

console.log(book1);
console.log(book2);

const book3 = Book("React", 18000, "wade");

console.log(book3); // undefined -> 반환값이 없음
console.log(title, price, author, publish);
