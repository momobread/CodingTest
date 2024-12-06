// https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript
//138477

function solution(k, score) {
  // k = 명예의 전당 점수 목록 수
  //score = 1~n까지의 점수 표
  //풀이방법 : 일단 때려넣고 정렬하기(가장 작은게 마지막) => k번째까지 걍 짤라버리기 => 마지막 인덱스 갖고오기
  //단 : k번째 날까지는 점수가 다 차있지 않기 때문에 예외 처리 해줌
  var answer = [];
  let day = score.length;
  let topArray = Array.from({ length: k - 1 }, () => 0); //[0,0,0,0]
  score.map((dayscore, day) => {
    console.log('map시작');
    topArray.push(dayscore); //10, 100, 20 ,150     10,0,0,0, 100,10,0,0,
    topArray = topArray.sort((a, b) => b - a);
    topArray = topArray.slice(0, k);
    console.log(topArray, '정렬');
    //k 전날 까지는 마지막 인덱스를 가져오는게 아니라 찾아야됌
    if (day < k - 1) {
      console.log(topArray[day], '가장작은값');
      answer.push(topArray[day]);
      console.log(answer, '답');
    } else {
      answer.push(topArray.at(k - 1));
      console.log(answer, '답');
    }
  });
  return answer;
}

// console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
