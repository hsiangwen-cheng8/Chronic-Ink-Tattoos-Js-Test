let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
export function encryptCaesar(inputString, key) {
// function encryptCaesar(inputString, key) {
  // TODO: write your code here
  let res = "";
  for(let i = 0; i < inputString.length; i++)
  {
    let c = inputString[i].charCodeAt(0);
    let n = c - 'A'.charCodeAt(0);
    let index = (n + key ) % 26;
    res += alphabets[index];
  }
  return res;
}

console.log(encryptCaesar('XYZ', 4));
