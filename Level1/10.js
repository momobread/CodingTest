//두 정수 사이의 합
// function solution(a, b) {
//   var answer = 0;
//   //3 4 5
//   //3 3
//   if (a < b) {
//     for (; a <= b; a++) {
//       answer += a;
//     }
//   } else if (a > b) {
//     for (; a >= b; a--) {
//       answer += a;
//     }
//   } else {
//     answer = a;
//   }

//   return answer;
// }

//🛎️한번에 못맞춘 이유 : a가 b보다 클때일 조건을 따지지 않았다

//서울에서 김서방 찾기
// function solution(seoul) {
//   var answer = "";
//   var num = seoul.findIndex((e) => {
//     if (e === "Kim") return e;
//   });
//   answer = `김서방은 ${num}에 있다`;

//   return answer;
// }

//🛎️한번에 못맞춘이유 finfIndex를 바로 사용하면 되는데 arr.find((e,i)=>{})를 사용

//음양더하기
// let arr = [4, 7, 12];
// let arr2 = [true, false, true];
// solution(arr, arr2);
// function solution(absolutes, signs) {
//   var answer = 0;
//   let sign = 0;

//   for (let i = 0; i < absolutes.length; i++) {
//     if (signs[i] === true) {
//       sign = 1;
//     } else {
//       sign = -1;
//     }
//     console.log(sign);
//     answer += sign * absolutes[i];
//   }

//   return answer;
// }

//🛎️한번에 못맞춘 이유 : true,false가 불리언이여서 "true"쓰면 안됌

//없는 숫자 더하기
// function solution(numbers) {
//   var answer = -1;
//   //없는 수를 다 더하세요
//   let allNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let nanNum = allNum.filter((e) => !numbers.includes(e));

//   answer = nanNum.reduce((acc, cur) => {
//     return acc + cur;
//   });
//   return answer;
// }
///////////

//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  var answer = [];
  answer = arr
    .filter((e) => e % divisor == 0)
    .sort((a, b) => {
      return a - b;
    });
  if (answer.length == 0) {
    answer = [-1];
  }
  return answer;
}
//🛎️한번만에 못맞춘 이유 find를 쓰면 최초 하나만 찾아서(메서드 잘못씀)
//그리고 마지막 조건 나누어 떨어지는게 없을떄 [-1]리턴을 안씀
