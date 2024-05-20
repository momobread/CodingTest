//정수 제급근 판별
console.log(solution(121));

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n == i * i) {
      answer = (i + 1) * (i + 1);
      console.log(answer);
      return answer;
    } else {
      answer = -1;
    }
  }
  return answer;
}

//sqrt
console.log(solution2(16));

function solution2(n) {
  switch (n % Math.sqrt(n)) {
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return -1;
  }
}

//한번에 못 맞추고 계속 실수를 하네용
// 천천히 정확히 풀기
