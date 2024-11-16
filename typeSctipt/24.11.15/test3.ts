// 다음 조건을 만족하는 타입을 정의해보세요.

// 사용자 정보를 담는 User 타입
// 필수 속성: id(숫자), name(문자열)
// 선택적 속성: email(문자열)
// id는 읽기전용으로 설정
// 다음 두 타입을 정의하고 인터섹션 타입을 만들어보세요.

// Product: name(문자열), price(숫자) 속성
// Discount: discountRate(숫자) 속성
// DiscountedProduct: 위 두 타입의 인터섹션

type User = {
  readonly id: number;
  name: string;
  email?: string;
};

type Product = {
  name: string;
  price: number;
};

type Discount = {
  discountRate: number;
};

type DiscountedProduct = Product & Discount;

// User 타입 정의
type User = {
  readonly id: number;
  name: string;
  email?: string;
};

// User 정보를 출력하는 함수
function printUserInfo(user: User): void {
  console.log("=== User Information ===");
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  }
}

// 사용 예시
const user1: User = {
  id: 1,
  name: "Kim",
};

const user2: User = {
  id: 2,
  name: "Lee",
  email: "lee@example.com",
};

printUserInfo(user1); // email 없는 경우
printUserInfo(user2); // email 있는 경우
