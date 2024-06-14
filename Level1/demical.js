//1부터 10000까지의 소수를 구해보자
//소수 : 1보다 큰수 중 자기 1과 자기자신만을 약수로 가지는 수
//약수 : 나머지가 없이 떨어지는 수식

let num = [];
let demical = [];
for (let i = 1; i <= 10000; i++) {
  num.push(i);
  // 7/1 = 7     8/1 = 8
  // 7/2 = 0     8/2 = 4
  // 7/3 = 0     8/3 = 2
  // 7/4 =0
  // 7/5 =0
  // 7/6 = 0
  // 7/7 = 1
  //특징 1부터 n까지 나누었을때 몫이 1 아니면 n
  for (let j = 1; j <= 10000; j++) {
    if (
      Math.floor(num[i - 1] / j) == 1 &&
      Math.floor(num[i - 1] / j) == num[i - 1]
    ) {
      demical.push(num[i - 1]);
    }
  }
  console.log(demical);
  //   console.log(num);
}
