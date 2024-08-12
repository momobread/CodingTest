//n이 들어오면 5*5 00000 2^0 + 2^1 ...... 2^4
//n이 들어오면 6*6   2^0+2^1 ---- 2^5

// 0 0 0 0 0

// 0 1 0 0 1  = 9
// 1 0 1 0 1 = 20
// 1 1 1 0 0 = 28
// 1 0 0 1 0 = 18
// 0 1 0 1 1 = 11

// 1 1 1 1 0 = 30
// 0 0 0 0 1 = 1
// 1 0 1 0 1 = 21
// 1 0 0 0 1 = 17
// 1 1 1 0 0 = 28

// 1 1 1 1 0   #####
// 1 0 1 0 1   # # #
// 1 1 1 0 1   ### #
// 1 0 0 1 1   #  ##
// 1 1 1 1 1   #####

//1.A지도를 2진수로 바꾸기 -> 배열에 저장
//2.B지도를 2진수로 바꾸기 -> 배열에 저장
//3.A지도와 B지도를 비교하여 새로운 C지도로 바꾸기 => 배열에 저장
//4.바꾼 C지도를 다시 #이나 공백으로 바꾸기\

let binary1 = [];
let binary2 = [];
let answer = [];
let binary3 = '';
function solution(n, arr1, arr2) {
  BinaryToDecimal(n, arr1, binary1);
  BinaryToDecimal(n, arr2, binary2);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (binary1[i][j] == '0' && binary2[i][j] == '0') {
        binary3 += ' '; //주의! 유니코드 공백으로 하면 안나옴
      } else {
        binary3 += '#';
      }
    }
    answer.push(binary3);
    binary3 = '';
  }
  console.log(answer);
}

function BinaryToDecimal(n, arr1, binary) {
  let div = ''; //나머지
  let share = 1; //몫

  arr1.map((decimal, i) => {
    share = decimal;
    while (div.length !== n) {
      div += share % 2; // 1
      //   console.log(div);
      share = Math.floor(share / 2); //4
    }
    binary.push(`${div.split('').reverse().join('')}`);
    div = '';
    // console.log(binary);
    // console.log('hhee');
  });
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

// let st = '00011111';
// let qq = `${st.split('').reverse().join('')}`;
// console.log(qq);
