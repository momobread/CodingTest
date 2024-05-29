// function solution(phone_number) {
//   var answer = "";
//   let len = phone_number.length; //20

//   //스트링 배열로 바꾸기
//   let arr = [...phone_number];

//   //끝 4자리 빼고 별로 바꾸기
//   for (let i = 0; i < len - 4; i++) {
//     arr[i] = "*";
//   }

//   //배열을 스트링으로 바꾸기
//   arr.forEach((v, i) => (answer += v));

//   return answer;
// }

console.log(solution("0108890"));

//💡
//한번에 못맞친 이유 : foreach가 아니라 forEach  아...시은아 제발...

//repeat을 써서 해보자궁
function solution(phone_number) {
  var answer = "";
  let len = phone_number.length; //20

  answer += "*".repeat(len - 4);
  answer += phone_number.slice(-4);

  return answer;
}
