/* 
1. main() 호출
2. getData() 실행 -> 사용자 입력 읽기
3. { a: ..., b: ... } 형태로 결과 반환
4. main()에서 data.a, data.b로 활용 가능
*/

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후, 객체에 a, b 속성으로 저장하여 변환한다.
 * @returns {Object} a, b속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");
  // console.log(fileData);

  const result = new Object();
  // 객체로 여러 값을 한 번에 반환
  result.a = parseInt(fileData[0]);
  result.b = parseInt(fileData[1]);

  return result;
}

function main() {
  const data = getData();
  //data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b);
}
main();
