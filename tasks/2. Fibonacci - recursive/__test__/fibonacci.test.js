import 'chai/register-expect';
import { getFibonacciUntil } from '../fibonacci';

describe('getFibonacciUntil() function', () => {
  it('should return the fibonacci numbers unil n in an array', function () {

    const result = getFibonacciUntil(7).toString();
    const expected = '0,1,1,2,3,5,8';

    expect(result).to.equal(expected);
  });

  it('should throw error when n = 0', function () {

    expect(function () {
      getFibonacciUntil('0')
    }).to.throw(("Error: Number is less than 1"));
  });

  it('should return the fibonacci numbers unil n in an array', function () {

    const result = getFibonacciUntil(1).toString();
    const expected = '0';

    expect(result).to.equal(expected);
  });

  it('should return the fibonacci numbers unil n in an array', function () {

    const result = getFibonacciUntil(2).toString();
    const expected = '0,1';

    expect(result).to.equal(expected);
  });

  it('should return the fibonacci numbers unil n in an array', function () {

    const result = getFibonacciUntil(12).toString();
    const expected = '0,1,1,2,3,5,8,13,21,34,55,89';

    expect(result).to.equal(expected);
  });

  it('should return the fibonacci numbers unil n in an array, and n is float', function () {

    const result = getFibonacciUntil(12.1).toString();
    const expected = '0,1,1,2,3,5,8,13,21,34,55,89';

    expect(result).to.equal(expected);
  });

  it('should return the fibonacci numbers unil n in an array, and n is float', function () {

    const result = getFibonacciUntil(11.9).toString();
    const expected = '0,1,1,2,3,5,8,13,21,34,55';

    expect(result).to.equal(expected);
  });

  it('should throw error is n < 0', function () {

    expect(function () {
      getFibonacciUntil('-1')
    }).to.throw(("Error: Number is less than 1"));
  });

  it('should throw error if input is not valid', function () {
    expect(function () {
      getFibonacciUntil('sdfja')
    }).to.throw(("Unable to parse int"));
  });
});
