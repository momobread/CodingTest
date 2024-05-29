function solution(num) {
  var answer = 0;

  do {
    if (num == 1) {
      answer = 0;
    } else if (num % 2 == 0) {
      num = num / 2;
      answer += 1;
    } else {
      num = num * 3 + 1;
      answer += 1;
    }

    if (answer == 500) {
      num = 1;
      answer = -1;
    }
  } while (num !== 1);

  return answer;
}
solution(6);

// 💡
//한번에 못맞춘이유
//1인 경우 조건을 안달았다 (0번)
//while()문 쓸때 조건을 반대로 착각했다
//조건이 false가 될때까지 계속반복 == 조건이 true이면 계속 실행
