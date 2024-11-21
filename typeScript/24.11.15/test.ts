// 여기에 알맞은 타입을 지정하세요
let userName: string = "김개발";
let userAge: number = 25;
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["typescript", 100];

// 다음 코드에서 발생할 수 있는 타입 관련 오류를 찾고 수정해보세요.
let value: string = "Hello";
// value = 42; string타입에 number 할당 불가

let numbers1: number[] = [1, 2, 3];
// numbers.push("4"); number 배열에 string 할당 불가

let mixed: (number | string)[] = [1, "two", 3];
// mixed.push(true); number|string 배열에 boolean 할당 불가

// 적절한 반환 타입을 지정하세요
function logMessage(message: string): void {
  console.log(message);
}

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("무한 루프");
  }
}

// 2.4 번 ['apple', 'banana', 'mango']를 순회해서 하나씩 출력하는 코드를 작성해주세요.
const fruits: string[] = ["apple", "banana", "mango"];
// for (let i= 0; i < fruit.length; i++) {
//   console.log(`${i}`);
// }

for (let fruit of fruits) {
  console.log(fruit);
}
