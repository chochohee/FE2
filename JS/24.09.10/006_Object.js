// key값 : 문자열(변수명 작성 규칙을 만족하면 따옴표 생략 가능), Symbol만 사용가능
// value : 어떤 자료형이든 사용 가능
const obj = {
  name: "licat", // 프로퍼티키 : 프로퍼티 벨류
  age: "30",
  "co-worker": ["binky", "mura"],
};

console.log(obj);

const company = "weniv";
let user = {
  name: "licat",
  company, // 변수명과 키가 같다면 축약 가능
  location: {
    country: "korea",
    city: "jeju",
  },
  "co-worker": ["binky", "mura", "soungom"],
  greeting: function () {
    console.log("Hello, I am licat!");
  }, // 메서드
};

console.log(user);

// 객체의 속성에 접근
// 1. 대괄호 표기법 (key 값을 문자열로 감싸주기)
console.log("---- 대괄호 표기법 ----");
console.log(user["company"]);
console.log(user["location"]);
console.log(user["greeting"]());
console.log(user["co-worker"]);

// 2. 점 표기법
console.log("---- 점 표기법 ----");

console.log(user.company);
console.log(user.location);
console.log(user.greeting());
// 변수명 작성 규칙을 만족하지 못하는 경우는 점표기법 사용불가 -> 대괄호 표기법을 사용
// console.log(user.co-worker);

console.log(user.friend); // undefined

console.log("--- 속성 추가 및 삭제 ---");

user["job"] = "CEO"; // 추가

user["location"] = "Jeju"; // 수정

delete user.job; // 삭제
console.log(user);

console.log("--- 객체 속성 확인 ---");
console.log("job" in user); // false
console.log("name" in user); // true

// ------------------------------
console.log("--- 객체의 중첩 ---");
user = {
  name: "licat",
  company, // 변수명과 키가 같다면 축약 가능
  location: {
    country: "korea",
    city: "jeju",
  },
  "co-worker": ["binky", "mura", "soungom"],
  greeting: function () {
    console.log("Hello, I am licat!");
  }, // 메서드
};

console.log("대괄호표기법", user["location"]["city"]);
console.log("점표기법", user.location.city);

console.log("--- 객체 순회 ---");
// for ... of
for (const key in user) {
  console.log(key, user[key]);
}

// for in이 가져오는 key 값이 순서를 보장하지 않는다.

console.log("--- 객체의 메서드 ---");
const weniv = {
  ceo: "Licat",
  manager: "Mura",
  designer: "Soulgom",
};
console.log("Object.keys", Object.keys(weniv)); // 순서를 보장
console.log("Object.values", Object.values(weniv)); // IE에서는 대응 불가
console.log("Object.entries", Object.entries(weniv));
