//자연수 뒤집어 배열로 만들기
console.log(solution(123456));
function solution(n) {
  var answer = [];
  let str = `${n}`;
  answer = str.split("");
  answer = answer.reverse();
  answer.map((_, i) => {
    answer[i] = Number(answer[i]);
  });

  return answer;
}
