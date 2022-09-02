/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let arrS = [];
  let tempS = "";
  let long = 0;
  if (s.length == 1) {
    long = 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (!tempS.includes(s[i])) {
      tempS += s[i];
    } else {
      if (tempS.length > long) {
        long = tempS.length;
      }
      arrS.push(tempS);

      tempS = tempS.substring(tempS.indexOf(s[i]) + 1);
      tempS += s[i];
    }
    if (tempS.length > long) {
      long = tempS.length;
    }
  }

  return long;
}

console.log(lengthOfLongestSubstring("pwwkew"));
