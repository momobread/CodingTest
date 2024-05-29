function solution(arr) {
  var answer = [];
  console.log(arr.length);
  if (arr.length == 1) {
    answer = [-1];
  } else {
    let min = Math.min(...arr); // 1
    arr.splice(
      arr.findIndex((v) => v == min),
      1
    ); //작은수 빼기
    answer = arr;
  }
  return answer;
}

solution([10]);

//바로 못맞춘 이유
// 6번 부분은 else에다 안쓰고 걍 썼음
//생각해봐 If 해놓고 else 안해놓으면 당연히 밑에 실행하지 ㅡㅡ
//그리고 findIndex쓸때는 arr.findIndex이다  주의하자
