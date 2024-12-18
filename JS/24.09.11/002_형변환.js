// 자동 형 변환
console.log(+"240"); // 숫자형으로 변환 240
console.log("2024" + 9); // 문자열로 변환

console.log("===== 문자열 변환 =====");
console.log("1. String 메서드");

console.log(typeof String(3)); // string
console.log(String(Infinity));
console.log(String(NaN));
console.log(true);
console.log(false);
console.log(null);
console.log(undefined);

console.log("2. toString 메서드");
console.log(typeof (10).toString());
console.log((15).toString(16)); // f / 15는 16진수에서 f로 표현
console.log(parseInt((15).toString(16), 16));
console.log(Infinity.toString());
console.log(NaN.toString());
console.log(true.toString());
console.log(false.toString());

// toString메서드로는 null과 undefined를 문자로 변환할 수 없다.
// console.log(null.toString());
// console.log(undefined.toString());

console.log("3. 문자열 연결 연산자 +");
console.log("2" + 2); // 나머지 피연산자를 문자열로 변환(암묵적 형 변환)
console.log("" + 2);
console.log("" + Infinity);
console.log("" + true);
console.log("" + null);
console.log("" + undefined);

console.log("===== 숫자로 변환 =====");
console.log("1. Number 함수 이용");
console.log(typeof Number("234"));
console.log(Number("Infinity"));
console.log(Number("1e3"));
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("숫자로 표현할 수 없는 값")); // NaN

console.log("2. parseInt, paseFloat");
// 문자열만 숫자로 변환
console.log(parseInt("3.14"));
console.log(parseFloat("3.14"));

console.log(parseInt("250px")); // 250
console.log(Number("250px")); // NaN

console.log(parseInt("너비는 2.4px")); // NaN

console.log("3. 암묵적인 형 변환 이용");
console.log("3-1. 더하기 단항 연산자");

console.log(+"24"); // 24
console.log(+"hello"); // NaN
console.log(+null); // 0
console.log(+undefined); // NaN

// -, *, /, %, ** -> 숫자를 반환
console.log("3-2. 산술 연산을 이용한 형 변환");
console.log("24" * 1); // 24
console.log(true * 1); // 1
console.log(false * 1); // 0
console.log(undefined * 1); // NaN

console.log("===== 불리언 타입 =====");
console.log("1. Boolean 함수");
console.log(Boolean("x")); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(-23)); // true / 0을 제외한 모든 숫자는 true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log("2. 암묵적인 형 변환");
// 논리 부정 연산자 -> boolean 타입으로 형을 변환 + 부정을 한 결과를 출력
console.log(!!"Hello World"); // true
console.log(!!""); // false
console.log(!!120); // true
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!null); // fgalse
console.log(!!undefined); // false
