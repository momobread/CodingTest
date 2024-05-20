//x만큼 간격이 있는 n개의 숫자

// console.log(solution(0, 2));
// function solution(x, n) {
//   var answer = [];
//   //n = 자연수 1,2,3...
//   //x= 정수 ...-2,-1,0,1,2...
//   //양 양
//   //음 양
//   //양 0
//   //2 --- ------ 6
//   let tmp = 0;
//   tmp = x;
//   if (x > 0) {
//     for (; x <= tmp * n; x += tmp) {
//       //2 2+2=4 4+2=6
//       // -4 >= -8
//       answer.push(x);
//     }
//   } else if (x < 0) {
//     for (; x >= tmp * n; x += tmp) {
//       //2 2+2=4 4+2=6
//       // -4 >= -8
//       answer.push(x);
//     }
//   } else {
//     // x가 영인경우
//     for (let i = 0; i < n; i++) {
//       answer.push(x);
//     }
//   }

//   return answer;
// }

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}
