// 선택적 파라미터(optional parameter)

(() => {
  function user(name: string, age?: number) { // '?:' 선택 입력 인자 설정 시, '?'가 없으면 필수 입력
    console.log(name, age);
  }

  user("하루", 5);
  user("tree");
})();
