function solution(food) {
  //피자 햄버거 햄버거 치킨 물 치킨 햄버거 햄버거 피자
  //food = 정수 [] food의 길이는 최소 3 food[0]은 물
  //[1은 무조건 물 ] 인덱스 1 ,2 ,3 부터 음식 시작, 음식의 갯수
  var answer = "";
  let reverse = "";
  food.map((v, i) => {
    //0을기준 왼쪽 만들기
    if (v % 2 == 0) {
      //음식이 딱맞게 떨어진다면
      answer += `${i}`.repeat(v / 2); //22
    } else {
      //   딱맞게 떨어지지 않으면
      answer += `${i}`.repeat(Math.floor(v / 2)); //1
    }
  });
  for (let i = answer.length - 1; i >= 0; i--) {
    reverse += answer[i];
  }

  return answer + "0" + reverse;
}

//한번에 못맞춘 이유
//reverse()는 배열에서만 가능.... =>문자열을 reverse로 쓸려고하니 그렇지 ㅜㅜ
