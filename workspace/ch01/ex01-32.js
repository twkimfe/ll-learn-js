/*
매개변수를 가진 함수 - 도어락
도어락은 비밀번화가 입력되면 문이 열린다
잘못된 비밀번호가 입력되면 경보음이 울린다
*/

function doorlock(password) {
  const pwd = 1234;
  if (password === pwd) {
    console.log("문이 열립니다.");
  } else {
    console.log("입력 실패");
  }
}

doorlock(1111);
doorlock(1234);
doorLock(); //undefined가 된다. 함수가 정의만 되어있고 값이 없기 때문에 