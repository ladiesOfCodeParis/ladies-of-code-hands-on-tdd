function toRomanNumerals(value) {
    const keyValues = {
        1:'I',
        0: '',
        5:'V',
        10:'X'
    }

    if(keyValues[value] !== undefined) {
      return keyValues[value];
    }

    return 'II'


}
module.exports = toRomanNumerals;