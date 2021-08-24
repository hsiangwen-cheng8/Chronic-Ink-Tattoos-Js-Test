export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  let left = 0;
  for(let i = 0; i < inputString.length; i++)
  {
    if(inputString[i] === ')')
    {
      left--;
      if(left < 0)
        return false;
    }
    else if(inputString[i] === '(')
    {
      left++;
    }
  }
  return left === 0;
}