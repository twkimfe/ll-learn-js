// count 속성과 ride(), getCount() 메서드 작성
const Counter = function () {
  this.count = 0;
  this.getCount = function () {
    return this.count;
  };
  this.ride = function () {
    if (this.count < 40) {
      this.count++;
    } else {
      console.log("정원이 초과되었습니다.");
    }
  };
};

const c = new Counter();
c.ride();
c.ride();

for (let i = 0; i < 40; i++) {
  c.ride();
}

// c.count += 40; // 이 코드는 위 for문과 같은 효과를 보일 수 있지만, 수가 커질 경우 에러가 생길 수 있다.
// 해당 코드가 실행 안되게 할려면, this.count의 'this'를 삭제하면 됨

console.log("전체 탑승자", c.getCount());