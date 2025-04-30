/*
논리 연산자 &&, ||, !
*/

//논리 합(or)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 앞의 값이 참이면 앞의 값을 반환
console.log("hello" || "world");
console.log(90 || 30);
console.log(null || "world");
console.log(undefined || "world");
console.log(0 || 100);

let userName = "유저 이름";
let userAge = 22;
console.log(userName || "guest");
userName = "";
userAge = null;
console.log(userAge || "Age unknown");

var id = null; // type은 object
console.log("글자수", id && id.length);
console.log("글자수", id?.length); //'?.' 옵셔널 체이닝 문법
