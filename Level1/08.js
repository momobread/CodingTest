console.log(solution(112));

function solution(x) {
  var answer = true;
  let hasard = x;
  //1+0 = 1 10은 1로 나누어 떨어짐
  // 12 = 1 +2 는 3 12는  3으로 나누어 떨어짐
  // 112 = 1 + 1 + 2 =4 112는 4로 나누어 떨어짐 = > 하샤드

  let sum = 0;

  do {
    sum += x % 10;
    console.log(sum);
    x = Math.floor(x / 10);
    console.log(x);
  } while (x > 0);

  if (hasard % sum == 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
//round하고 floor 헷갈리지 말자
//round 반올림 floor 절삭
