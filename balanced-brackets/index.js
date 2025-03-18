function areBracketsBalanced(str) {
  const start = "{[(";
  const end = "}])";
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const queue = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (start.includes(char)) {
      queue.push(char);
    }

    if (end.includes(char)) {
      const last = queue.pop();

      if (map[char] !== last) {
        return false;
      }
    }
  }

  return !queue.length;
}

console.log(areBracketsBalanced("(x + y) - (4)")); // -> true
console.log(areBracketsBalanced("(((10 ) ()) ((?)(:)))")); // -> true
console.log(areBracketsBalanced("[{()}]")); // -> true
console.log(areBracketsBalanced("(50)(")); // -> false
console.log(areBracketsBalanced("[{]}")); // -> false
