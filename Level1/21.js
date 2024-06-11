function solution(number) {
  //number 큰배열 3~13까지
  //각 배열의 길이 -1000~ 1000
  // 순서에 상관없이 3개의 인덱스를 더했을때 0이되면 그 3개는 삼총사
  //경우의 수는 몇개?
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    console.log("i의값은", i);
    console.log(number[i]);
    for (let j = i + 1; j < number.length - 1; j++) {
      console.log("j의값은", j);
      console.log(number[j]);
      for (let k = j + 1; k < number.length; k++) {
        console.log("k의 값은", k);
        console.log(number[k]);

        if (number[i] + number[j] + number[k] == 0) {
          answer += 1;
        }
      }
    }
    // console.log("끝........");
  }

  return answer;
}

solution([-2, 3, 0, 2, -5]);
//한번에 못맞춘 이유
//포인터 세개로 삼중 포문을 쓸때 맨 바깥쪽 i이 배열은 끝까지 돌아선 안된다
//(두개 앞까지 돌아야한다)
//내가 한 방식대로 끝까지 돌면 i=4 j=5 k=6 이렇게 배열크기를 뛰어넘는다
//왜?나머지 두개의 포인터(j,k)가 차례대로 붙어있어서    i-2만큼 해야된다
//마찬가지로 j 포문도 끝까지 돌아서는 안되고 그 옆에 포인터 1개(k)가 남아서 움직이기
//때문에 j-1을 해야된다 (하나앞까지 돌아야한다)

//근데 난 반대로 k의 끝값을 -2 해서 조정해버렸다
//그럴필요가 없는게 어차피 k는 인덱스 !!끝까지 돌아야하고!! k의 초기값을
//j+1로 해놨기때문에 k의 포문 중간값은 건드릴 필요가 없지
/