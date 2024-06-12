// let arr = [];
// let array = ["b", "a", "n", "a", "n", "a"];
// let element = "a";
// let arr = "";
// let s = "banana";
// let e = "a";
// let idx = s.indexOf(e);
// while (idx != -1) {
//   arr += idx;

//   idx = s.indexOf(e, idx + 1);
//   //a        1
//   //a
// }
// console.log(arr);

function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    //['b','a','n','a','n','a']
    // 0   1   2   3   4   5
    //result [-1 -1 -1  3-1 4-2  ]
    //hash  [b: 0 a: 3 n: 4 ]
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    console.log("결과는", result);
    hash[v] = i;
    console.log("해쉬는", hash);
    return result;
  });
}
solution("banana");
//객체를 이용해 키값을 v로 하고 i값을 value로 한다
//만약 undefined가 아니면 현재 인덱스 - hash[v]의 인덱스를 해서 answer읅 구하면된다
//그리고 다시 hash객체를 키값 v,밸류값 i를 이용해 갱신한다
