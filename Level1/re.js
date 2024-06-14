function solution(t, p) {
  var answer = 0;
  let len = p.length;
  for (let i = 0; i < t.length; i++) {
    console.log(i, i + p);
    console.log(Number(t.slice(i, i + p)));

    if (Number(t.slice(i, i + p)) <= Number(p)) {
      answer += 1;
    }
  }
  return answer;
}

solution("50022", "7");
