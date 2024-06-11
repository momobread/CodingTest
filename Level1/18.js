//크기가 다른 부분 문자열

//틀린정답
function solution(t, p) {
  var answer = [];

  for (let i = 0; i <= t.length - p.length; i++) {
    answer.push(t.slice(i, i + p.length));
    console.log(answer);
  }
  answer = answer.map((v, i) => {
    if (Number(v) <= Number(p)) {
      return answer[i];
    } else {
      return null;
    }
  });
  console.log(answer);
  return answer.length;
}

//맞춘정답
function solution(t, p) {
  var answer = [];
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    answer.push(t.slice(i, i + p.length));
  }
  // answer=answer.map(v => Number(v) <= Number(p))
  for (let i = 0; i < answer.length; i++) {
    if (Number(answer[i]) <= Number(p)) {
      count += 1;
    }
  }
  return count;
}

console.log(solution("3141592", "271"));

//틀린이유
// answer.push부분에 반복문을 사용할때 <=을 써야함 < 을 쓰면 마지막 n글자를 못가져옴
//map을 써서 v를 비교할때 반환값이 true false로 나옴

// function solution(t, p) {
//   var answer = [];
//   let count = 0;

//   for (let i = 0; i <= t.length - p.length; i++) {
//     answer.push(t.slice(i, i + p.length));
//   }
//   // answer=answer.map(v => Number(v) <= Number(p))
//   for (let i = 0; i < answer.length; i++) {
//     if (Number(answer[i]) <= Number(p)) {
//       count += 1;
//     }
//   }
//   return count;
// }

//더 나은 방식

function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
console.log(solution("3141592", "271"));
