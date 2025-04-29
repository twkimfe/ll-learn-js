// echo 함수 - 제네릭 함수
// ex06-17.ts 복사

(() => {
  // T가 아닌 아무 문자를 사용할 수 있지만, 관례적으로 Type의 첫 글자인 T를 사용
  function echo<T>(msg: T): T {
    return msg;
  }

  // 타입 별칭도 추가하여 구현 가능
  type name = string | number;
  function echo2<name>(msg: name): name {
    return msg;
  }

  console.log(echo<string>("hello"));
  console.log(echo2<name>(2));
})();
