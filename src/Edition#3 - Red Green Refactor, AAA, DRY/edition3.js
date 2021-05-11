function toRomanNumerals(value) {
    const specialCases = {
        0: '',
        4: 'IV',
        5:'V',
        10:'X'
    }

    if(specialCases[value] !== undefined) {
      return specialCases[value];
    }

    let result = '';
    if ( value == 6 || value == 7 || value == 8) {
        result = 'V';
        value -= 5;
    }
    for (let i=1; i <= value ; i++ ) {
        result += 'I';
    }
    return result;


}
module.exports = toRomanNumerals;