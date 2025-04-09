/*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavaScript Object Notaion
*/
// 많은 언어에서 데이터 주고받는 표기법으로 많이 사용

const strFoo = JSON.stringify(foo);
console.log('strFoo', typeof strFoo, strFoo);

const foo = {
  "name": "제이슨핑",
  "age": 7,
  "job": "요정",
  "married": true,
  "email": "json@gmail.com",
};