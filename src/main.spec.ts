import { concatenate, parseNum, validateLength } from "./main";
//
// Sample outputs
//

describe('Concatenated', () => {
  it('should print XXII when roman numerals XX + II', () => {
    // given
    const romanNum1 = 'XX';
    const romanNum2 = 'II';

    // when
    const romanNum = concatenate(romanNum1, romanNum2);

    // then
    expect(romanNum).toEqual('XXII');
  });
});

describe('Subtraction', () => {
  it('should print 4 when the roman numeral is IV', () => {
    // given
    const romanNum = 'IV';

    // when
    const number = parseNum(romanNum);

    // then
    expect(number).toEqual('4');
  });

  it('should print 900 when the roman numeral is CM', () => {
    // given
    const romanNum = 'CM';

    // when
    const number = parseNum(romanNum);

    // then
    expect(number).toEqual('900');
  });
});

describe('Length', () => {
  it('should print you can’t have more than three when the numeral is I, X or C', () => {
    // given
    const romanNum = 'II';

    // when
    const result = validateLength([romanNum, romanNum]);

    // then
    expect(result).toEqual('You can’t have more than three');
  });

  it('should print you can’t have more than one when the numeral is V, L or D', () => {
    // given
    const romanNum = 'D';

    // when
    const result = validateLength([romanNum, romanNum]);

    // then
    expect(result).toEqual('You can’t have more than one');
  });
});