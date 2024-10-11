// 회원가입

fetch("https://eduapi.weniv.co.kr/11/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "test123",
    password: "test1234",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 로그인

fetch("https://eduapi.weniv.co.kr/11/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "test123",
    password: "test1234",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 로그인 확인
// header에 배우지않은 Authorization이 나왔습니다!
// 'Bearer ' 뒤에 로그인 할 때 받은 토큰을 넣어주면 로그인 인증을 해주는 header 입니다.
// 띄어쓰기 한 칸 있는 것 주의해주세요!
fetch("https://eduapi.weniv.co.kr/login_confirm", {
  method: "POST",
  headers: {
    Authorization: "Bearer eyJhbGciOi.weniv.h8t7NJKEiWCh7G3",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 토큰을 로컬 스토리지에 저장하는 방법
localStorage.setItem("token", "eyJhbGciOi.weniv.h8t7NJKEiWCh7G3");
localStorage.getItem("token");

// 나중에는 이렇게 사용하셔아합니다.
const token = localStorage.getItem("token");
fetch("https://eduapi.weniv.co.kr/login_confirm", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 블로그 글 가져오기
fetch("https://eduapi.weniv.co.kr/11/blog")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 글 상세 목록 - GET
fetch("https://eduapi.weniv.co.kr/11/blog/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 블로그 생성 fetch를 이용한 POST 요청
fetch("https://eduapi.weniv.co.kr/11/blog", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "javascript",
    content: "login token 어려워요",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 블로그 수정 fetch를 이용한 PUT 요청
fetch("https://eduapi.weniv.co.kr/11/blog/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "test put",
    content: "test put",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 블로그 삭제 fetch를 이용한 DELETE 요청
fetch("https://eduapi.weniv.co.kr/11/blog/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 200    서버가 요청을 제대로 처리.
// 403    Forbidden. 서버가 요청을 거부.
// 404    서버가 요청한 페이지를 찾을 수 없음.
// 500    서버에 오류가 발생하여 요청을 수행할 수 없음.


// 토큰을 가볍고 빠르게 구현하고자한다 -> 로컬스토리지
// 상업 프로젝트다, 보안이 필요하다 -> 쿠키 html