// 두 숫자를 받아서 그 합을 반환하는 함수
function add(x: number, y: number):number {
  return x + y;
}

// 문자열을 받아서 콘솔에 출력하는 함수
function printMessage(message: string):void {
  console.log(message);
}

// 아래 조건을 만족하는 JavaScript 함수, TypeScript 함수를 만들어보세요.

// 함수는 두개의 인자를 받습니다.
// products: 제품 목록 배열 (각 제품은 name과 price 프로퍼티를 가집니다)
// minPrice: 필터링 할 최소 가격, 입력이 없다면 0으로 설정합니다.
// 최종적으로 필터링하고 정렬된 제품의 이름 목록을 반환합니다.
// 완성된 함수를 타입스크립트를 이용해 변경해봅시다.
// 예를 들어 데이터는 아래와 같습니다.+

const products = [
  { name: "칫솔", price: 3000 },
  { name: "사과", price: 4000 },
  { name: "배", price: 6000 },
  { name: "바나나", price: 3500 },
];
const minPrice = 3000;

function filterProduct(
  products: { name: string; price: number }[],
  minPrice: number
): string[] {
  return products
    .filter((product) => product.price >= minPrice)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((product) => product.name);
}

filterProduct(products, minPrice);
