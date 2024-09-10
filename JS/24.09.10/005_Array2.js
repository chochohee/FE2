// 배열의 메서드2
const arr = ["a", "b", "c"];
arr.forEach(function (elem, index) {
  console.log(elem, index);
});

const frutiArr = ["참외", "키위", "감귤"];
const resultArr = [];
frutiArr.forEach((elem, index) => {
  resultArr.push(`${index}. ${elem}`);
});

console.log(frutiArr);
console.log(resultArr);

// forEach를 이용한 문제
const phoneNumbers = [
  "010-1234-5678",
  "02-987-6543",
  "031-456-7890",
  "010-8765-4321",
];

// phoneNumbers.forEach((elem, index) => {
//   console.log(elem.slice(-4));
// });

const lastDigits = [];
phoneNumbers.forEach((elem, index) => {
  console.log(elem.slice(-4));
  lastDigits.push(elem.slice(-4));
});
console.log(lastDigits);

// map
const mapArr = [1, 2, 3];
const newArr = mapArr.map(function (elem, index) {
  console.log(elem, index);
  return elem * index;
});

console.log(newArr);

const lastMapDigits = phoneNumbers.map((elem, index) => {
  return elem.slice(-4);
});
console.log(lastMapDigits);

const data = [
  {
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    name: "Annette Middleton",
    gender: "female",
    company: "KINETICA",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    name: "Kidd Roman",
    gender: "male",
    company: "AUSTECH",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    name: "Best Ratliff",
    gender: "male",
    company: "PRISMATIC",
  },
];

const ageArray = data.map((elem, index) => {
  return elem["age"];
});
console.log(ageArray);

console.log("=== for of ===");
const forOfArr = ["사과", "바나나", "오렌지"];
for (const el of forOfArr) {
  console.log(el);
  if (el === "바나나") break;
}

// filter
console.log("--- filter ---");
const filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 짝수인 요소만 가지고 오기
const filteredArr = filterArr.filter((elem, index) => {
  console.log(elem, index);
  return !(elem % 2);
});

console.log(filteredArr);

// reduce => 배열이 비어있을 경우, 초기값의 부재로 오류가 발생 할 수 있으니, 초기값을 설정해주자.
const reduceArr = [1, 2, 3, 4, 5];
console.log(
  reduceArr.reduce(
    (a, c) => {
      console.log(`누적값: ${a}, 현재값: ${c}`);
      return a + c;
    },
    0 // 초기값
  )
);

const mul = reduceArr.reduce((a, c) => {
  console.log(`누적값: ${a}, 현재값: ${c}`);
  return a * c; // 곱하기
}, 1);
console.log(mul);

console.log("--- join ---");
const joinArr = ["hello", "world", "weniv"];
console.log(joinArr.join()); // 구분자를 지정하지 않을 경우 기본 구문자 (,)로 연결

const numbers = ["010", "1111", "2222"];
console.log(numbers.join("-"));
// 010(숫자) -> 8(십진수) -> 문자
// 8진수 0o 0o16 -> 14 // 0을 붙이면 8진수로 처리

console.log("--- concat ---");
const concatArr1 = [1, 2, 3];
const concatArr2 = [4, 5, 6];
const concatArr3 = [7, 8, 9];
console.log(concatArr1.concat(concatArr2, concatArr3));

const newConcatArr = concatArr1.concat();
concatArr1.push(4);
console.log(newConcatArr);

// 1. 배열에서 짝수인 경우, 제곱하여 합을 구하라
const arr0 = [1, 2, 3, 4, 5, 6, 7, 8];
const filterArr0 = arr0.filter((item) => {
  return !(item % 2);
});

const squareArr = filterArr0.map((item) => {
  return item ** 2;
});
console.log(squareArr);

const sumArr = squareArr.reduce((a, c) => {
  return a + c;
});

console.log(sumArr);

console.log(
  arr0
    .filter((elem, index) => {
      return !(elem % 2);
    })
    .map((elem, index) => {
      //제곱해서
      return elem ** 2; //elem*elem
    })
    .reduce((a, c) => {
      return a + c;
    }, 0)
);

console.log(
  arr0
    .filter((elem, index) => {
      return !(elem % 2);
    })
    .reduce((a, c) => {
      return a + c ** 2;
    }, 0)
);
