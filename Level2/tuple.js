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
  console.log("//////");
  console.log(answer);
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
  answer = Object.entries(pair).sort((a, b) => (a[1] < b[1] ? 1 : -1));

  // 첫번째 값은 Key, 두번째 값은 Value

  //   console.log(pair);
  console.log("정렬된 배열ㅇ비니다");
  console.log(answer);
  answer = answer.map((v, i) => Number(v[0]));

  return answer;
}

solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");

//이렇게 하면 한자리는 되는데 두자리세리부터 안된다
//왜?? =>각 원소의 순히 배열을 i+2씩 해서 수동으로 순회해서 그렇다
//
