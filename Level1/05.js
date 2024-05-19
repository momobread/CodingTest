//정수 내림차순으로 배치하기

// console.log(solution(34247));

//MY

// function solution(n) {
//   var answer = [];
//   let str = `${n}`;
//   answer = str.split("");
//   answer.map((v, i) => {
//     answer[i] = Number(answer[i]);
//   });
//   let length = answer.length;

//   for (let i = 0; i < length; i++) {
//     if (i == length - 2) {
//       if (answer[i] < answer[i + 1]) {
//         tmp = answer[i];
//         answer[i] = answer[i + 1];
//         answer[i + 1] = tmp;
//       }
//     } else {
//       for (let j = i + 1; j < length; j++) {
//         if (answer[i] < answer[j]) {
//           tmp = answer[i];
//           answer[i] = answer[j];
//           answer[j] = tmp;
//         }
//       }
//     }
//   }
//   str = "";
//   answer.forEach((_, i) => (str += answer[i]));

//   return Number(str);
// }

//자꾸 문자열을 숫자로 바꾸는 걸 잊지 말자
//문제를 똑바로 읽자! 배열을 반환하는게 아니라 스트링을 반환해야됑

// another
//number

console.log(solution(19948));
function solution(n) {
  let nums = [];

  do {
    nums.push(n % 10);
    console.log(nums);
    n = Math.floor(n / 10);
    console.log(n);
  } while (n > 0);

  return nums.sort((a, b) => b - a).join("") * 1;
}
//
