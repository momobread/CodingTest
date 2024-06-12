//시저암호
function solution(s, n) {
  var answer = "";
  let len = 0;
  let ascii = 0;
  //아스키코드를 이용하자
  //공백처리가 문제인데 하나씩 탐색하는데 " "이면 다음문자 이렇게 처리하자
  len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] == " ") {
      //공백이면 그냥 패스
      answer += " ";
    } else {
      ascii = s[i].charCodeAt(); //숫자값으로 바꾸기
      if (ascii >= 65 && ascii <= 90) {
        //대문자
        if (ascii + n > 90) {
          ascii = ascii + n - 26; //알파벳 개수만큼 뺴고 n만큼 변환
        } else {
          ascii = ascii + n;
        }
      } else {
        //소문자
        if (ascii + n > 122) {
          ascii = ascii + n - 26;
        } else {
          ascii = ascii + n; //n만큼 변환
        }
      }

      answer += String.fromCharCode(ascii); //다시 문자로 변환
    }
  }
  //소문자 a는 97이여서 조건에 걸린다...
  return answer;
}

//한번만에 못맞춘 이유: 끝값에 걸리는 조건을 그냥 퉁쳐서 ascii>90 || ascii >122하면
//소문자 a 처럼 97인 경우에도 저 끝값조건에 걸려서 -26을 하게 된다.
//그래서 대문자 케이스 소문자 케이스 한번 나누고 그안에서 끝값 넘으면 처리해주는 조건을 달아야 한다
