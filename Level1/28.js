//문자열 내 마음대로 정렬하기

function solution(strings, n) {
  return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
      //아스키코드가 같으면
      return (a > b) - (a < b); //걍 사전순 정렬
    } else {
      //아니면
      return (chr1 > chr2) - (chr1 < chr2);
    }
  });
}

function solution2(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

solution(['car', 'bed', 'sun'], 2);
