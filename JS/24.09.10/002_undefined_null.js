// undefined
let a;
console.log(a); // undefined : 변수에 값이 할당되어 있지 않음, 정의되지 않은 변수에 접근할 때
console.log(typeof a); // undefined

console.log(typeof b); // 선언하지 않은 변수에 typeof -> undefined

// null
// 비어있는 값. 명시적으로 값이 비어있음을 나타내는 값
let isLoggedIn = true;
let currentUser = {
  name: "licat",
  level: 3,
};

// 로그인이 해제
isLoggedIn = false;
currentUser = null; //명시적으로 빈 값
currentUser = undefined; // 빈 값. 의미론적 부적절 -> 사용하지X

console.log(`typeof null >> `, typeof null); // 오류로 인하여 object로 출력됨
console.log("" === null); // 일치 연산을 사용해서 비교
console.log(Object.prototype.toString.call(null)); // 타입비교
