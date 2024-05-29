function solution(cacheSize, cities) {
  var answer = 0;

  //문제상황 : 도시이름 검색 => 해당 도시관련 맛집 DB 가져오기
  //문제 : 캐시크기

  //cachesize : 0~30 정수
  //cities : max:100,000 문자열 배열
  //  도시이름 : 영문자,대소문자구분x 최대 20글자
  //   let arr[cities.length][cacheSize] = 0;
  const arr = Array.from(Array(cities.length), () => new Array(cacheSize));

  console.log(arr);
  // 배열 만들고 초기화
  let count = new Array(cacheSize);
  console.log(count.length);

  for (let i = 0; i < cities.length; i++) {
    for (let j = 0; j < cacheSize; j++) {
      if (arr[i][j] == null) {
        console.log(i + "행" + j + "열");
        arr[i][j] = cities[i];
        count[j] += 1;
        j = cacheSize;
        //계속 여기에 걸린다
      } else if (arr[i][j] != null) {
        console.log("여기기");
        if (arr[i][j] == cities[i]) {
          count[j] = 1;
          break;
        } else if (arr[i][j] == null) {
          arr[i][j] = cities[i];
          count[j] += 1;
          j = cacheSize;
        } else {
          // arr[i][j] !=cities[i]
          //count에서 숫자가   가장 큰 친구의 인덱스를 바꿔라
          console.log("가장 큰 카운트값은");
          console.log(count.indexOf(Math.max(...count)));
        }
      }
    }
    arr[i + 1] = arr[i];
    console.log(arr);
    for (let i = 0; i < count.lenght; i++) {
      count[i] += 1;
      console.log("돌아갑니다");
    }
    console.log(i + "행 끝///////////////");
  }
}

// return answer;
let cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
];
solution(3, cities);

// 다른 방법 : 0행 탐색
// 0열 값없으면 넣기

// 1행 탐색
// 0열 값있으면 next
// 1열 값없으면 넣기

// 2행 탐색
// 0열,1열 값있으면 next
// 2열에다 넣기

// 3행탐색
// 0열,1열,2열 모두 값이 있으면
// count이 가장 큰 인덱스의 번호에다 집어넣기
// 그 칸 count 초기화
