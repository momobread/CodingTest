//Level 1 콜라문제

// 2개의 빈병당 1개 20개 주면 => 19개 획득
//20/2 = 10 ... 0
//10/2 = 5 .... 1
//5/2  = 2 .... 1
//2/2  = 1 .... 0
//나머지 병 1+ 1 = 2
// 10 + 5 + 2 + 1 + 1

// 3개의 빈병당 1개 20개 주면 => 9개
// 20 /3 = 6...2
// 6/3 = 2 ... 0
// 2/3 = 0 ... 2
// 나머지가 0일때 상위 나머지 더해서 콜라를 얻을수 있는지 췤

//만약 3개에 2병씩 주면??
// a = 3 / b= 2 /n = 20
//20 / 3 = 6 * 2 ... ... 2
//12 / 3 = 4 * 2 ........0
//4 / 3  = 1 * 2 ....... 1
//2 / 3 =  0 *2 .........2

// 2 + 1 + 2 = 5 다시 반복

let MainCoke = 1;
let divCoke = 0;
let entitleCoke = 0;

function solution(a, b, n) {
  //a = 몇병?, b = 1개 n = 시작빈병

  //초기는 바로 a로 나누기
  MainCoke = Math.floor(n / a); //몫   20/3 .... 6
  entitleCoke += MainCoke; //total = 6

  CalculateCoke(MainCoke, a, b);

  //   console.log(divCoke);

  if (divCoke >= a) {
    // console.log('야호');
    CalculateCoke(divCoke, a, b);
    // console.log(entitleCoke);
  }
  //   } else {
  //     return entitleCoke;
  //   }
  return entitleCoke;
}

function CalculateCoke(MainCoke, bottle, per) {
  let tmp = 0;
  while (MainCoke != 0) {
    MainCoke = MainCoke * per; // 6*3 = 18
    divCoke += MainCoke % bottle; //
    tmp = MainCoke % bottle;
    MainCoke = Math.floor(MainCoke / bottle); //갱신

    entitleCoke += MainCoke;
  }
  //밑에 코드로 하면 이미 MainCoke은 0으로 바껴있어서
  //2/3 .... 나머지 2 를 더하는게 아니라 0/3 .... 0을 더하게 된다
  //   divCoke += MainCoke % bottle
  divCoke += tmp;
  console.log(divCoke);
}

console.log(solution(2, 1, 20));
// console.log('답은 ', solution(3, 1, 20));

//테스트 케이스 10개 돌리면 실패.....
