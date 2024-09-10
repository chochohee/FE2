let a = 10;
let b = a;

console.log(a, b);
a = 20;
console.log(a, b);

let obj = { name: "licat", age: 30 };
let obj2 = obj;

console.log(obj);
console.log(obj2);

obj2 = { name: "licat", age: 30 };

console.log("obj1", obj);
console.log("obj2", obj2); // 참조된 값에 의한 전달 (참조에 의한 전달 X)
console.log(obj == obj2);
