//
/* for(365번의 반복){
    console.log('기상')
    console.log('양치')
    console.log('세수')
    console.log('아침밥')
} */

// 1부터 10까지의 수를 출력하겠다.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  const weniv_friends = ["licat", "binky", "gary", "soulgom", "mura"];
  
  /* let text = "<ul>";
  text += "<li>" + weniv_friends[0] + "</li>";
  text += "<li>" + weniv_friends[1] + "</li>";
  text += "<li>" + weniv_friends[2] + "</li>";
  text += "<li>" + weniv_friends[3] + "</li>";
  text += "<li>" + weniv_friends[4] + "</li>";
  text += "</ul>";
  
  console.log(text);
  document.body.innerHTML = text; */
  
  let text2 = "<ul>";
  for (let i = 0; i < weniv_friends.length; i++) {
    text2 += "<li>" + weniv_friends[i] + "</li>";
  }
  text2 += "</ul>";
  document.body.innerHTML = text2;
  
  // 1. 1부터 10까지 숫자 중 짝수만 출력
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  // 2. 반복문을 이용하여 1부터 100까지의 숫자 중 짝수의 합을 구합니다.
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
  
  let sum2 = 0;
  for (let i = 2; i <= 100; i += 2) {
    sum2 += i;
  }
  console.log(sum2);
  
  console.log("===이중 for문 ===");
  //구구단
  for (let i = 2; i <= 9; i++) {
    console.log(`---${i}단---`);
    for (let j = 1; j <= 9; j++) {
      console.log(`${i}x${j} = ${i * j}`);
    }
  }
  
  console.log("=== for문의 선택적 사용");
  let i = 0;
  for (; i < 10; ) {
    console.log(i);
    i++;
  }
  
  // 두개의 주사위를 던졌을때, 주사위의 눈의 합이 8이 되는 모든 경우를 출력
  // [2,6]
  
  for (i = 1; i <= 6; i++) {
    for (j = 1; i <= 6; j++) {
      if (i + j === 8) {
        console.log([i, j]);
      }
    }
  }
  