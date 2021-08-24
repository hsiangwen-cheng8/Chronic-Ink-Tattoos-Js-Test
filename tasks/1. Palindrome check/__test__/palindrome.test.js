import 'chai/register-expect';
import { isPalindrome } from '../palindrome';

describe('isPalindrome() function', () => {
  it('should return FALSE if given input is not a palindrome', function () {

    const inputString = 'ewqrfg';

    expect(isPalindrome(inputString)).to.equal(false);
  });

  it('should return TRUE if given input is a palindrome', function () {

    const inputString = 'racecar';

    expect(isPalindrome(inputString)).to.equal(true);
  })

  it('should return TRUE if given input is empty', function () {

    const inputString = '';

    expect(isPalindrome(inputString)).to.equal(true);
  })

  it('should return TRUE if given input is a palindrome', function () {

    const inputString = 'at ta';

    expect(isPalindrome(inputString)).to.equal(true);
  })

  it('should return False if given input is not a palindrome', function () {

    const inputString = 'a t ta';

    expect(isPalindrome(inputString)).to.equal(false);
  })
});