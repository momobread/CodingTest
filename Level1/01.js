//문자열 내 p와 y의 개수 [연습문제]
console.log(solution("pPooYy"));
console.log(solution("Pyy"));

function solution(s) {
  var answer = true;
  let string = s;
  string = string.toUpperCase();

  let countP = 0;
  let countY = 0;

  let arr = [];
  arr = string.split("");

  console.log(arr);

  arr.find((e) => {
    if (e === "P") {
      countP += 1;
    } else if (e === "Y") {
      countY += 1;
    }
  });

  if (countP === countY) {
    return (answer = true);
  } else if (countP === 0 && countY === 0) {
    return (answer = true);
  } else {
    return (answer = false);
  }

  return answer;
}

//문제를 잘 확인할것
// 그냥 조건없이 막 짜르고 싶으면 split()에 ""를 쓴다
//str.split("")
