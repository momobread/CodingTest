function solution(s) {
  var answer = "";
  let dictionary = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  s = [...s];
  let tmp = "";

  while (s.length > 0) {
    for (let i = 0; i < s.length; i++) {
      tmp += s[i];
      if (dictionary[tmp]) {
        console.log("들어옴");
        //바로 영문자가 시작될때
        answer += dictionary[tmp];
        s.splice(0, i + 1);
        tmp = "";
        break;
      } else if (
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(tmp)
      ) {
        answer += s[i];
        s.splice(0, i + 1);
        tmp = "";
        break;
      }

      console.log(tmp);
    }
    console.log(answer);
    console.log(s);
  }
  return Number(answer);
}

solution("one4seveneight");
// 왜 실수했을까?
// splice를 쓰면 원본객체값이 바뀌기 때문에
// s.splice(i + 1, s.length + 1); 이렇게하면 return값이 4부터 끝까지 잘림이지 s값은 그값을 뺀 one이 된다
//1,2,3,4,5가 문자열이여서 include안에 "1","2"...로 해야됌 , 객체의 값도 정수가 아니라 "1","2","3"
//그리고 eigth 가 아니라 eight
// let s = ["1", "2", "3"];
//그리고 splice로 배열안에 모두 잘라버리면 빈배열 되는건 맞지만, s !=[]로하면 안되고 s != ""로 해야된다
//그리고 빈 배열을 조건으로 주고 싶으면 s.length >0을 주면된다
// s.splice(0, 3);
// console.log(s);
