// function solution(numbers) {
//   var answer = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1 + i; j < numbers.length; j++) {
//       answer.push(numbers[i] + numbers[j]);
//       console.log(
//         numbers[i],
//         "+",
//         numbers[j],
//         "=",
//         numbers[i] + numbers[j],
//         answer
//       );
//     }
//   }
//   answer.sort((a, b) => a - b); //오름차순 정렬
//   answer = [...new Set(answer)]; //중복값 제거
//   return answer;
// }

solution([5, 0, 2, 7]);

//한번에 못맞춘 이유
//shift써서 앞에 짤라서 계속 반복하려면 for(i)부분에 while을 쓰고 그안에서 반복문으로 돌려야 된다
//둘다 for문을 쓰면 짤린상태에서 첫번째 부터 시작하는 것이 아니라 그 다음부터 다음부터 계속 그렇게 된다
//그리고 유동적으로 토너먼트방식으로 더할려면 안쪽 포문에 초깃값도 유동적으로 해줘야 된다

//unshift쓰려면?
function solution(numbers) {
  var answer = [];

  while (numbers.length !== 1) {
    for (let j = 1; j < numbers.length; j++) {
      answer.push(numbers[0] + numbers[j]);
    }
    console.log(answer);
    numbers.shift(); //앞쪽 자르기
  }
  answer.sort((a, b) => a - b); //오름차순 정렬
  answer = [...new Set(answer)]; //중복값 제거
  console.log(answer);
  return answer;
}
