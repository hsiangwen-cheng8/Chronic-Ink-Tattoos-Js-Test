export function isPalindrome(inputString) {
// function isPalindrome(inputString) {
  // TODO: write your code here
  let start = 0;
  let end = inputString.length-1;
  while(start <= end)
  {
    if(inputString[start] !== inputString[end])
    {
      return false;
    }
    ++start;
    --end;
  }
  return true;
}

isPalindrome('racecar')