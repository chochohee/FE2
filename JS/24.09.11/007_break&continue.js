console.log("=== break와 continue ===");
console.log("1. break");
// switch
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i + j === 10) break;
    console.log(i, j);
  }
}

console.log("2. continue");
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

console.log("3. label");
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(i, j);
  }
}

console.log("-------------");

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) continue outer;
    console.log(i, j);
  }
}
