function solution(s) {
  //순서가 다르면 다른 튜플
  var answer = [];
  let answer2 = "";
  let pair = {};
  //0번인덱스가 원소가 가장 많이 반복되고 인
  //인덱스가 늘어나면 늘어날수록 반복횟수가 줄어든다
  // answer=[...s.slice(1,-1).slice(1,-1).split("},{")]
  answer = s.slice(2, -2).split("},{");

  for (let i = 0; i < answer.length; i++) {
    answer += answer[i].slice(1, -1); //걸리적 거리는거 다 없애기
  }

  //여기서 부터 객체 카운팅
  for (let i = 0; i < answer.length; i = i + 2) {
    let keys = Object.keys(pair);
    console.log("현재 answer값", answer[i]);
    console.log("key값들 입니다", keys);
    console.log("객체값들 입니다", pair);

    if (keys.length == 0) {
      pair[`${answer[i]}`] = 1;
    } else {
      for (let j = 0; j < keys.length; j++) {
        //Keys 순회
        if (keys[j] !== `${answer[i]}`) {
          //객체가 다를때
          console.log("객체 다름");
          console.log(pair);
          if (j == keys.length - 1) {
            //다 순회했는데도 없으면
            pair[`${answer[i]}`] = 1;
            console.log(pair);
          }
        } else {
          console.log("객체의 키값과 answer값이 같습니다");
          pair[`${answer[i]}`] = pair[`${answer[i]}`] + 1;
          console.log(pair);
          break;
        }
      }
    }
  }
  //value값으로 정렬하기
  console.log(pair);
  return answer;
}

solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");
