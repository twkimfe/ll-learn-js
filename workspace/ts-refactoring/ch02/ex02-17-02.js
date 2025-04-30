/*
카운터 예제
*/

var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // this = myObj
    // 방문자를 한명 증가시킨다.
    // myObj.count++; // this.count++로 변환 시 정상 작동
    this.count++; // 위와 같이 작동한다, this = myObj
    var visit2 = function () {
      this.count++; // this = myObj
    };
    visit2.call(this);
  },
};

myObj.visit(); // this = myObj
myObj.visit();
console.log("방문자수", myObj.count); // 2
console.log("방문자수2", count); // 2
