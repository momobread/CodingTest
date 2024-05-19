//자릿수 더하기

console.log(solution(40505));

function solution(n) {
  let arr = [];
  let string = `${n}`;
  let sum = 0;
  arr = string.split("");

  arr.forEach((v, i) => {
    sum += Number(arr[i]);
  });

  var answer = sum;

  return answer;
}
