module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let stack = [];
for (let bracket of str) {
  let bracketsIndex = brackets.indexOf(bracket)

  if (bracketsIndex % 2 === 0) {          
    if (bracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] === bracketsIndex) {
      stack.pop();
    } else {
      stack.push(bracketsIndex)
    }
  }
  }      
}
return stack.length === 0
