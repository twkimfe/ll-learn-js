/*
new Object() - 생성자 함수로 객체 생성
*/

/*
국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
*/

// let kor = 100;
// let eng = 90;
// let math = 85;

// let sum = kor + eng + math;
// let avg = sum / 3;

// console.log("총점", sum);
// console.log("평균", avg);

// 객체로 만들기
const score = {
  kor: 100,
  eng: 90,
  math: 85,
  sum: function () {
    // 총점을 반환한다
    // TODO this
    // 객체의 메서드가 자신의 속성을 접근할 때 this 사용
    return this.kor + this.eng + this.math;
  },
  avg: function () {
    return this.sum() / 3;
  },
};

// score.sum = score.kor + score.eng + score.math;
// score.avg = score.sum / 3;

console.log("총점", score.sum());
console.log("평균", score.avg());
