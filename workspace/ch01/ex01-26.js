/*
배열 생성, 읽기, 쓰기
*/

const arr = new Array(1, 2, 3);
// 지정한 배열의 마지막 요소를 추가한다
arr.push(10);
arr[4] = 20;
arr[5] = 30;
arr[1] = 100;
arr[9] = 200;

// 기존 값을 변경
arr[1] = 100;

// 배열의 마지막에 새로운 데이터 추가, 아래 두 코드 모두 같은 기능을 수행
arr[arr.length] = 300;
arr.push(400); //arr[arr.length] 대신 push 메서드 사용하는 게 더 쉽다

console.log(arr.length);
console.log(arr[7]);
console.log("배열의 마지막 값", arr[arr.length - 1]);
console.log(typeof arr, arr);

// 배열도 for in 문이 가능하지만 이상하게 출력된다, arr.index 값을 반환
/*
for (let attr in arr) {
  console.log(attr);
}
*/
