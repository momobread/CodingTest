function solution(sizes) {
  var answer = 0;
  //일단먼저 큰값은 왼쪽으로 다 작은값은 오른쪽으로 다 옮긴다
  //둘이 비교해서 큰걸 왼쪽으로 밀자
  //그다음 max값을 찾아서 리턴하면되지롱

  //10 7       1차값 14 15         //10 7
  //12 3       2차값               //12 3
  //8 15                          //15 8
  //14 7                          //14 7
  //5 15                          //15 5
  let tmp = 0;
  let w = [];
  let h = [];
  for (let i = 0; i < sizes.length; i++) {
    //정렬
    if (sizes[i][0] < sizes[i][1]) {
      /// 3 13
      tmp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = tmp;
    }

    w.push(sizes[i][0]); //큰값들의 모임
    h.push(sizes[i][1]); //작은값들의 모임
  }

  answer = Math.max(w) * Math.max(h); //각 배열에서 큰값들을 찾자

  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
