function solution(s) {
  var answer = "";
  //짝수일때 6 8 dkfkfk
  if (s.length % 2 == 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    //222 22222 2222222
    answer = s[Math.floor(s.length / 2)];
  }
  return answer;
}
