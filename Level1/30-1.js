//1<=b<a<=n<=1000000

// (2)
function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    var gainbottle = Math.floor(n / a) * b; //1
    var remainbottle = n % a; //1
    //콜라를 마시기
    n = gainbottle + remainbottle;
    //    3   + 1  == n = 4
    answer += gainbottle;
  }

  return answer;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
