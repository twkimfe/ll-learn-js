// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용
const url = "https://api.thecatapi.com/v1/images/search";
const btn = document.querySelector("button");

btn?.addEventListener("click", getImages);
// 2번째 인자에 getImages-> 함수 자체를 넘긴다
// 2번째 인자에 getImages()-> 함수를 호출, return값을 대입

async function getImages() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      const data: Cat[] = await response.json();
      appendImages(data);
    } else {
      console.log(response.status, "에러 발생");
    }
  } catch (err) {
    // 네트워크 오류
    console.error("에러 발생", err);
  }
}
