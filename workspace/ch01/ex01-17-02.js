/*
if문
*/

// score가 90 이상 100 이하 일 때 'A' 출력
// score가 80 이상 90 이하 일 때 'B' 출력
// score가 70 이상 80 이하 일 때 'C' 출력
// score가 60 이상 70 이하 일 때 'D' 출력
// score가 60 이하 일 때 'F' 출력

// 개인코드 + claude 수정
/** const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
const score = parseInt(fileData[0]);

if (score > 90 && score <= 100) {
  console.log("A");
} else if (score > 80 && score <= 90) {
  console.log("B");
} else if (score > 70 && score <= 80) {
  console.log("C");
} else if (score > 60 && score <= 70) {
  console.log("D");
} else if (score < 60) {
  console.log("F");
}
*/

const score = 70;

// else-if로 코드 작성 - 개인 코드 오답
if (score >= 60 && score < 70) {
  console.log("D");
  if (score >= 70 && score < 80) {
    console.log("C");
    if (score >= 80 && score < 90) {
      console.log("B");
      if (score >= 90 && score < 100) {
        console.log("A");
      }
    }
  }
} else {
  console.log("F");
}

// 다른 수강생 정답
if (score >= 90 && score <= 100) {
  console.log("A");
} else {
  if (score >= 80 && score <= 90) {
    console.log("B");
  } else {
    if (score >= 70 && score <= 80) {
      console.log("C");
    } else {
      if (score >= 60 && score <= 70) {
        console.log("D");
      } else {
        if (score < 60) {
          console.log("F");
        }
      }
    }
  }
}

if (score >= 90 && score <= 100) {
  console.log("A");
} else {
  if (score >= 80) {
    console.log("B");
  } else {
    if (score >= 70) {
      console.log("C");
    } else {
      if (score >= 60) {
        console.log("D");
      } else {
        if (score < 60) {
          console.log("F");
        }
      }
    }
  }
}
