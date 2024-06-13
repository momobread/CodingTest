function solution(n) {
  var answer = 0;
  let na = "";

  while (n / 3 >= 1) {
    na += `${n % 3}`; //45/3 =15 나머지 0  15/3 = 5 / 3  //0021
    n = Math.floor(n / 3); // 0
  }
  //   console.log(n);
  na += `${Math.floor(n)}`; //1.22dwddsdsd
  console.log(na);
  //   console.log(na);
  //   answer = parseInt(Number(na), 3);
  answer = parseInt(na, 3);
  console.log(answer);
  return answer;
}
// Number(na)를 빼니까 됬다
solution(30000);
// console.log(+"100000000000");
