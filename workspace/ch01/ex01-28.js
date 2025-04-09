/*
유사 배열 객체
*/

/**
 * 전달 받은 배열의 모든 요소를 index와 함께 출력한다
 * @param {any[]} arr - 배열
 */
function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

const colorArr = ["orange", "yellow", "green"]; // 배열
printArr(colorArr);

const arr = {
  // 유사배열, .push() 메서드 등 사용불가
  length: 3,
  0: "red",
  1: "green",
  2: "blue",

  /**
   * 맨 끝에 지정한 elem를 추가한다
   * @param {*} elem - 추가할 요소
   */
  push: function (elem) {
    arr[arr.length] = elem;
    arr.length++;
  },
};
arr[3] = "white";
arr.length++;
arr.push("purple");

printArr(arr);
