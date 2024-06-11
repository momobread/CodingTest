function solution(s) {
  var answer = "";
  let newStr = "";
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 == 0) {
        newStr += arr[i][j].toUpperCase();
        console.log(newStr);
      } else {
        newStr += arr[i][j].toLowerCase();
        console.log(newStr);
      }
    }
    if (i == arr.length - 1) {
    } else {
      newStr += " ";
    }
  }
}
solution("try hello world");
//한번만에 못맞춘 이유 split(' ')을 써야하는데 splice(' ')을썻다
//배열안에 스트링도 인덱스로 값을 가져올수 있다
//arr[0][0] =t  / arr[0][1] = r / arr[0][2]  = y
//저렇게 다이렉트로 대,소문자 바꾼값을 새로운 newstr에 +=로 이어 붙인후
// j쪽 반복문이 끝나면 공백 " "을 += 할때 맨 마지막 인덱스
//즉 i의 맨마지막은 " "을 뺴줘야 한다
// "TrY HeLlO WoRlD " 아니면 <- 처럼 맨마지막 단어 뒤에 공백이 생김
