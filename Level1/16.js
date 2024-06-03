//내적
// function solution(a, b) {
//   var answer = 0;
//   for (let i = 0; i < a.length; i++) {
//     answer += a[i] * b[i];
//   }
//   return answer;
// }
// 다른풀이
// answer = a.reduce((acc,cur,i)=>{return acc += a[i]*b[i]},0)

//약수의 개수와 덧셈

// function solution(left, right) {
//   var answer = 0;
//   let arr = [];
//   //약수의 갯수를 구한다
//   for (; left <= right; left++) {
//     for (let i = 1; i <= left; i++) {
//       if (left % i == 0) {
//         ///약수를 찾자
//         arr.push(i);
//       }
//     }

//     if (arr.length % 2 == 0) {
//       //짝수이면
//       answer += left;
//     } else {
//       //홀수이면
//       answer -= left;
//     }
//     arr = [];
//   }

//   return answer;
// }
// solution(24, 27);
// //💡한번만에 못맟춘 이유 : 조건을 이중포문 안쪽에 쓰면 안되는데 안에썻고, arr을 초기화 시켜주지 않았다
// //그리고 약수를 다 더하거나 뺴는게 아니라 약수의 개수에따라 left를 더하고 뺴고 그런거임
// //문제를 잘못이해했다

// //다른 풀이
// //제곱근의 갯수가 정수이면 약수는 홀수이다!!!
// function solution(left, right) {
//   var answer = 0;
//   for (; left <= right; left++) {
//     if (Number.isInteger(Math.sqrt(left))) {
//       answer -= left;
//     } else {
//       answer += left;
//     }
//   }
//   return answer;
// }

//문자열 내림차순으로 배치하기
// function solution(s) {
//   var answer = "";
//   let arr = [];
//   //아스키코드 이용
//   for (let i = 0; i < s.length; i++) {
//     arr.push(s[i].charCodeAt());
//   }

//   arr.sort((a, b) => b - a);
//   arr.map((v, i) => (answer += String.fromCharCode(v)));
//   console.log(answer);
//   return answer;
// }

// 💡한번에 못푼 이유
// 문제 잘못 읽었다 => 아스키코드기분으로 큰것부터(소문자) 작은것(대뮨자)이라하면
//sort사용할떄 내림차순으로 해야되는데 오름차순으로 함
// 씨발씨발씨발
//그리고 sort는 문자열도 가능하다 str.sort()로!!

//한번더 다르게 풀어보자
// function solution(s) {
//   var answer = "";
//   answer = s.split("").sort().reverse().join("");
//   return answer;
// }

// console.log(solution("kskcAfVKD"));

//부족한 금액 계산하기
// function solution(price, money, count) {
//   //이용료, 내돈, 몇번탔는지
//   var answer = -1;
//   let total = 0;

//   for (let i = 1; i <= count; i++) {
//     //이용료계산
//     total += price * i; //total이용료
//   }

//   if (money - total < 0) {
//     //돈이 부족해
//     answer = Math.abs(money - total);
//   } else {
//     //돈이 부족하지 않아
//     answer = 0;
//   }
//   // money<total ? total-money : 0
//   return answer;
// }
// 💡한번만에 맞춤

// 문자열 다루기 기본
function solution(s) {
  //4<= s <=6
  //s == integer?
  var answer = true;
  //1111 444444 0000 ~ 999999
  // 0 00000000 a aaaaaaaa
  // 1e22 13553e333

  if (s.indexOf("e") >= 0) {
    //지수가 낑겨있을때
    answer = false;
    console.log("지수입니다");
  } else if (Number(s) >= 0) {
    //숫자로 바꿀수있나

    if (s.length == 4 || s.length == 6) {
      //길이가 4~6인가
      answer = true;
    } else {
      answer = false;
    } //숫자로만 되있지만 길이가 4~6이 아니다
  } else {
    answer = false; //아예 문자가 있다
  }

  return answer;
}
solution("1e22");

// 💡한번만에 못맞춘이유
// 1.아니라면의 조건을 쓰지 않았다. => 항상 if만 쓸때 주의하자....

// 2.특정한 경우를 따지지 않았따 => if(Number) "0000"이 주어지면
// false여서 조건 만족 못하니 Number(s)>=0으로 해야된다

//3.문제를 잘못 읽었다. 4~6이 아니라 4혹은 6 s.length == 4 || s.length ==6
//4. 1e22 같은 경우 true를 반환하게 된다
// '1e22'에 *1을 해주면 1e+22가 나온다.
