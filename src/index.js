module.exports = function check(str, bracketsConfig) {
let stack = [];
 
  for (let i=0; i<str.length; i++) {
  let currentSymbol = str[i];
  let bracketsController = bracketsConfig.find(cnf => cnf.includes(currentSymbol));
    if (!bracketsController) {
      return false;
    }
  const [open, close] = bracketsController;
    if (open === close) {
      if (close === stack[stack.length-1]) {
        stack.pop();
      } 
      else {
        stack.push(currentSymbol);
      }
    } 
    else {
      if (open === currentSymbol) {
        stack.push(currentSymbol);
      } 
      else if (close === currentSymbol && stack[stack.length-1] === open) {
        stack.pop();
      } 
      else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
