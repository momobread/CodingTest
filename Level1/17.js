// function solution(arr1, arr2) {
//   let row = arr1.length;
//   let column = arr1[0].length;
//   var answer = [];
//   let columnArr = [];

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < column; j++) {
//       columnArr.push(arr1[i][j] + arr2[i][j]);
//       console.log(i, "행입니다");
//       console.log(columnArr);
//     }
//     console.log("next");
//     answer.push(columnArr);
//     columnArr = []; //요부부분
//   }
// }

// console.log(
//   solution(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     [
//       [3, 4],
//       [5, 6],
//     ]
//   )
// );
//한번에 못맟친 이유 : columnarr를 다음행으로 가기전 초기화를 해야되는데 안했음
//다른풀이
// function sumMatrix(A,B){
//     return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
// }
// console.log(
//   sumMatrix(
//     [1, 2],
//     [
//       [3, 4],
//       [5, 6],
//     ]
//   )
// );
// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);
//   //a가 n가로, b가 m세로
//   let answer = "";

//   answer = "*".repeat(a);
//   answer += "\n";

//   console.log(answer.repeat(b));
// });
//한번에 못맞춘 이유 : return을 주는게 아니라 console.log로 답을 입력
// \n을 추가할때 +=로 해야지 answer = \n이렇게 해서 틀림
function solution(arr) {
  var answer = [arr[0]];

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  // console.log('Hello Javascript')

  for (let i = 1; i < arr.length; i++) {
    console.log(answer.length);
    if (answer[answer.length - 1] != arr[i]) {
      answer.push(arr[i]);
      console.log("jel");
    } else {
      console.log("같음");
      //   break;
    }
  }

  return answer;
}

console.log(solution([4, 4, 4, 3, 3]));
//한번에 못맞춘 이유 : break를 불필요하게 썼다
