console.log("=== 삼항 연산자 ===");

let score = 20;
const result = score > 30 ? "참 잘했어요!" : "조금 더 노력하세요";

console.log(result);

score = 70;
let grade =
  score > 90
    ? "A"
    : score > 80
    ? "B"
    : score > 70
    ? "C"
    : score > 60
    ? "D"
    : "F";

console.log(`점수는 ${grade}`);

/* if (score > 90) {
  grade = "A";
} else if (score > 80) {
  // score가 90보다 작거나 같다
  grade = "B";
} else if (score > 70) {
  // score가 80보다 작거나 같다
  grade = "C";
} else if (score > 60) {
  // score가 70보다 작거나 같다
  grade = "D";
} else {
  // score가 60보다 작거나 같다
  grade = "F";} */

console.log("=== switch ===");
let gender = "F";
switch (gender) {
  case "M":
    console.log("남성");
  case "F":
    console.log("여성");
  default:
    console.log("기타");
}

const today = new Date();
console.log(today.getDay());
// 0 일, 1 월, 2 화, 3 수, 4 목, 5 금, 6 토
// 일치 연산을 이용한 비교

switch (today.getDay()) {
  case 1:
    console.log("월요일입니다.");
    break;
  case 2:
    console.log("화요일입니다.");
    break;
  case 3:
    console.log("수요일입니다.");
    break;
  case 4:
    console.log("목요일입니다.");
    break;
  case 5:
    console.log("금요일입니다.");
    break;
  case 6:
  case 0:
    console.log("주말입니다.");
    break;
  default:
    console.log("잘못된 날짜가 입력되었습니다.");
}

let month = "1";
let season;
if (month >= 3 && month <= 5) {
  season = "봄";
} else if (month >= 6 && month <= 8) {
  season = "여름";
} else if (month >= 9 && month <= 11) {
  season = "가을";
} else {
  season = "겨울";
}

console.log(`${month}월은 ${season}입니다.`);

let month1 = today.getMonth() + 1;

switch (month1) {
  case 3:
  case 4:
  case 5:
    console.log(`${month1}월은 봄입니다.`);
    break;
  case 6:
  case 7:
  case 8:
    console.log(`${month1}월은 여름입니다.`);
    break;
  case 9:
  case 10:
  case 11:
    console.log(`${month1}월은 가을입니다.`);
    break;
  case 12:
  case 1:
  case 2:
    console.log(`${month1}월은 겨울입니다.`);
    break;
  default:
    console.log("날짜를 다시 확인하세요");
}
