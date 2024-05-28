function solution(cacheSize, cities) {
  var answer = 0;

  //빈 2차원배열 만들기
  const arr = Array.from(Array(cities.length), () => new Array(cacheSize));

  //카운팅 배열 만들기
  const count = Array(cacheSize).fill(0);

  for (let i = 0; i < cities.length; i++) {
    console.log(i + "행" + "////시작//////");
    //행

    for (let j = 0; j < cacheSize; j++) {
      //열
      if (!arr[i][j]) {
        //값이 비어 있다면
        console.log("들어옴");
        arr[i][j] = cities[i];
        count[j] += 1;
        j = cacheSize - 1;
      } else {
        //값이 비어있지않다면
        console.log("값이 비어있지 않는다면");

        if (arr.findIndex((v, i) => v == cities[i]) > 0) {
          //같은 도시의 이름이 있다면
          console.log("같은 도시의 이름이 있다면");
          count[arr.findIndex((v, i) => v == cities[i])] += 1; //count up
          j = cacheSize - 1;
          break;
        } else {
          //같은 도시의 이름이 없다면
          console.log("같은 도시의 이름이 없다면");

          if (count.findIndex((v) => v >= 1)) {
            console.log("count에 빈값이 있다면");
            let maxIndex = count.findIndex((v) => v == 1);
            console.log(maxIndex);
            arr[i][maxIndex] = cities[i]; //만약 카운트에 0이 있으면
            count[maxIndex] += 1;
            j = cacheSize - 1;
            break;
          } else {
            let max = Math.max(...count); // count중 최댓값 인덱스
            arr[i][max] = cities[i]; //가장 사용 안한거 교체
          }
        }
      }
      //배열 복사
    }
    console.log("배열복사");
    arr[i + 1] = arr[i];

    //count값 다 +1씩 더하기
    for (let k = 0; k < count.length; k++) {
      count[k] += 1;
    }

    console.log(i + "행의 배열");
    console.log(arr);
    console.log(count);
    console.log("/////////////");
    console.log("/////////////");
    console.log("/////////////");
  }

  return answer;
}

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
