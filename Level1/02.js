//문자열을 정수로 바꾸기 (생략)
//약수의 합
//약수 나머지가 없이 나누어 떨어지는 수
function solution(n) {
  var answer = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }

  answer = sum;
  return answer;
}
