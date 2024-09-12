console.log("=== 배열의 구조 분해 할당 ===");
const [a, , c] = [10, 20, 30, 40, 50];
console.log(a, c);

console.log("===함수의 구조 분해 할당===");
function func1({ name = "사용자", age = 0 } = {}) {
  console.log(name, age);
}
func1({ name: "licat", age: 20 });
// {name,age} = {naem:'licat', age:20}
func1({ age: 10, name: "binky", level: 20 });
func1({ name: "gary" });

function func2([a, b, c] = []) {
  // console.log(Math.max(a, b, c));
  console.log(a, b, c);
}
func2([10, 40, 30]);
func2([10, 50]);

// 함수 호출 주의점
func1(); // 아무 객체도 전달하지 않을 경우 -> undefined
// {name, age} = undefined; 오류가 발생

func2();
// [a,b,c] = undefined
