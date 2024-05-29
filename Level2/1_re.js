// function solution(cacheSize, cities) {
//   var answer = 0;

//   //빈 2차원배열 만들기
//   const arr = Array.from(Array(cities.length), () => new Array(cacheSize));

//   //카운팅 배열 만들기
//   const count = Array(cacheSize).fill(0);

//   for (let i = 0; i < cities.length; i++) {
//     console.log(i + "행" + "////시작//////");
//     //행

//     for (let j = 0; j < cacheSize; j++) {
//       //열
//       if (!arr[i][j]) {
//         //값이 비어 있다면
//         console.log("들어옴");
//         arr[i][j] = cities[i];
//         count[j] += 1;
//         j = cacheSize - 1;
//       } else {
//         //값이 비어있지않다면
//         console.log("값이 비어있지 않는다면");

//         if (arr.findIndex((v, i) => v == cities[i]) > 0) {
//           //같은 도시의 이름이 있다면
//           console.log("같은 도시의 이름이 있다면");
//           count[arr.findIndex((v, i) => v == cities[i])] += 1; //count up
//           j = cacheSize - 1;
//           break;
//         } else {
//           //같은 도시의 이름이 없다면
//           console.log("같은 도시의 이름이 없다면");

//           if (count.findIndex((v) => v >= 1)) {
//             console.log("count에 빈값이 있다면");
//             let maxIndex = count.findIndex((v) => v == 1);
//             console.log(maxIndex);
//             arr[i][maxIndex] = cities[i]; //만약 카운트에 0이 있으면
//             count[maxIndex] += 1;
//             j = cacheSize - 1;
//             break;
//           } else {
//             let max = Math.max(...count); // count중 최댓값 인덱스
//             arr[i][max] = cities[i]; //가장 사용 안한거 교체
//           }
//         }
//       }
//       //배열 복사
//     }
//     console.log("배열복사");
//     arr[i + 1] = arr[i];

//     //count값 다 +1씩 더하기
//     for (let k = 0; k < count.length; k++) {
//       count[k] += 1;
//     }

//     console.log(i + "행의 배열");
//     console.log(arr);
//     console.log(count);
//     console.log("/////////////");
//     console.log("/////////////");
//     console.log("/////////////");
//   }

//   return answer;
// }

// let cities = [
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "NewYork",
//   "LA",
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "NewYork",
//   "LA",
// ];
// solution(3, cities);

function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  const len = cities.length;

  // 캐시 사이즈가 0이면 모든 도시에 대해 캐시 미스
  if (cacheSize === 0) return len * 5;

  for (let i = 0; i < len; i++) {
    // test case 5
    const city = cities[i].toLowerCase();
    const index = cache.indexOf(city);
    console.log(i + 1 + "번쨰");
    // cache 배열에 city가 있을 때 (cache hit)
    if (cache.indexOf(city) !== -1) {
      answer += 1;
      console.log(index);
      cache.splice(index, 1);

      console.log(cache.map((v, i) => console.log(cache[i])));
      cache.push(city);
      // console.log(cache);
      console.log("값이 있을떄");
      console.log(cache.map((v, i) => console.log(cache[i])));
    }
    // cache 배열에 city가 없을 때 (cache miss)
    else {
      answer += 5;
      // 캐시 배열에 다 차면 cache[0]을 없애줌
      if (cache.length === cacheSize) cache.shift();
      cache.push(city);

      console.log(cache.map((v, i) => console.log(cache[i])));
    }
  }

  return answer;
}

let cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
];

solution(3, cities);

//내가 틀린이유
//1.가장 먼저 들어온 페이지 [0]인덱스가 시간이 지날수록 가장 안쓴거니까 계속 미스가 난다는 전제하에
//앞머리를 날리고 새로들어온것을 추가하면 가장 안쓴것을 날리는거랑 똑같은데 되는데 그것을 생각하지 못했다

//2.그리고 히트가 날때 그 부분을 떼서 가장 뒷 페이지에 붙이면
// 시간이 지나도 가장 뒤에 붙였으니 상대적으로 최근에 쓴게 되는데 그것을 생각하지 못했다

//3.너무 카운트 배열에만 집중한게 아닌가 싶다.... 직접 종이에 풀때는 그런게 필요할지도 모르는데
//코딩으로 할꺼면 굳이 카운팅이 필요없네요
