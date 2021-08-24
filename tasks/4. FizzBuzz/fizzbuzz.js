export function getFizzBuzzUntil(n) {
  // TODO: write your code here
  let res = new Array(n);
  for(let i = 0 ; i < n; i++)
  {
    let num = i + 1;
    if(num % 3 === 0 && num % 5 === 0)
    {
      res[i] = "FizzBuzz";
    }
    else if(num % 3 === 0)
    {
      res[i] = "Fizz";
    }
    else if(num % 5 === 0)
    {
      res[i] = "Buzz";
    }
    else
    {
      res[i] = num;
    }
  }
  return res;
}
