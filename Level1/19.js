function solution(d, budget) {
  // d [100,2000,3000] budget = 3000
  var answer = 0;
  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      //전체예산 - 부서값이 음수가 아닐때
      budget = budget - d[i];
      answer += 1;
      console.log(budget - d[i]);
    }
  }

  return answer;
}

console.log(solution([10000, 10, 1, 1, 10000], 20000));
//일단 buget으로 n번째 감당 가능하면 buget-n으로 budget을 갱신해줘야 함
//틀린이유 그냥 예산을 막 주는게 아니라 최대한 많은 부서에게 준다고 했으니까
//예산이 가장 적은 부서부터 줘서 빼야함
//내가 한 방식대로 하면 차례대로 주게되는거니까 많은 부서가 예산을 받아가지 못함
