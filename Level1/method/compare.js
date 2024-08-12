const dic = ['박모모', '박레이', '김아무개', '스키즈'];

let first = '';
let second = '';
dic.sort((a, b) => {
  first = a.charCodeAt();
  second = b.charCodeAt();
  return first - second;
});

// console.log(dic);
const dic2 = ['박모모', '박레이', '김아무개', '스키즈'];

dic2.sort((a, b) => b.localeCompare(a));
console.log(dic2);
