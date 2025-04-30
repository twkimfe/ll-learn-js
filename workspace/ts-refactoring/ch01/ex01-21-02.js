/*
반복문 - for문
*/

/*
 *
 **
 ***
 ****
 *****
 */

let lines = 5;
let star = 0;
for (let i = 0; i < lines; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

/*
 *****
 ****
 ***
 **
 *
 */
for (let i = 5; i >= 1; i--) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += "⭐️";
  }
  console.log(star);
}

/*
||||*
|||**
||***
|****
*****
*/

for (let i = 0; i < lines; i++) {
  let space = "";
  let star = "";
  for (let k = 0; k < lines - i - 1; k++) {
    space += " ";
  }
  for (let k = 0; k <= i; k++) {
    star += "*";
  }
  console.log(space + star);
}
/*
    *
   ***
  *****
 *******
*********
*/

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/