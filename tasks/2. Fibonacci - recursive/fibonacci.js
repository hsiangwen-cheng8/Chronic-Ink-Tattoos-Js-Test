let res = [];

export function getFibonacciUntil(n) {
// function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  n = parseInt(n);
  if (isNaN(n)) {
    throw new Error("Unable to parse int");
  }
  if(n <= 0)
  {
    throw new Error("Error: Number is less than 1");
  }
  else if(n === 1)
  {
    return [0];
  }
  else if(n === 2)
  {
    return [0, 1];
  }
  
  res = new Array(n);
  res[0] = 0;
  res[1] = 1;
  fibonacci(n-1);
  return res;
}

function fibonacci(n)
{
  if(res[n] > 0 || n <= 0)
  {
    return res[n];
  }
  return res[n]  = fibonacci(n - 1) + fibonacci(n -2);
}

getFibonacciUntil(7);
