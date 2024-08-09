//문자열 내 마음대로 정렬하기

//1.반복문을 돌린다
//2.특정 인덱스랑 비교한다
//3.i의 인덱스와 i+1의 인덱스를 비교했을때 크면 뒤로 민다
//4.n-1번 반복
//버블정렬!!

function solution(strings, n) {
  var answer = [];
  let tmp = '';
  let tmpN = n;

  for (let i = 0; i < strings.length - 1; i++) {
    //n-1번 돌아가지롱
    for (let j = 0; j < strings.length - 1 - i; j++) {
      // 하나씩 줄어들면서 첨부터 끝까지 비교
      if (strings[j][n].charCodeAt() > strings[j + 1][n].charCodeAt()) {
        tmp = strings[j];
        strings[j] = strings[j + 1];
        strings[j + 1] = tmp;
        tmp = '';
        //   } else if (
        //     strings[j][n].charCodeAt() === strings[j + 1][n].charCodeAt()
        //   ) {
        //     while (!tmp) {
        //       tmpN = tmpN + 1;
        //       if (
        //         strings[j][tmpN].charCodeAt() > strings[j+1][tmpN].charCodeAt()
        //       ) {
        //         tmp = strings[j];
        //         strings[j] = strings[j + 1];
        //         strings[j + 1] = tmp;
        //       }
        //     }

        // tmp = '';
      } else if (
        strings[j][n].charCodeAt() === strings[j + 1][n].charCodeAt()
      ) {
        tmpN = tmpN + 1;
        console.log(strings[j][tmpN]);
      }
    }
  }

  return strings;
}

// console.log(solution(['sun', 'bed', 'car'], 1));

console.log(solution(['sun', 'sun', 'sun'], 1));

// console.log(['abd', 'abce', 'eb']);
