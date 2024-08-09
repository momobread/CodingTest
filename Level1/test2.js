let str = {
  apple: 1,
  banana: 1,
  grapse: 1,
};
str.apple = str["apple"] + 1;

console.log(str["apple"]);

console.log(str);
