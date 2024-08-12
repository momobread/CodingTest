function solution(strings, n) {
  let first = '';
  let second = '';
  strings.sort((a, b) => {
    first = a[n].charCodeAt();
    second = b[n].charCodeAt();

    if (first === second) {
    } else {
      return a - b;
    }
  });
}

//localecompare은 유니코드로 변환해서 비교해준다
