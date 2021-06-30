function toRomanNumerals(value) {
    const dictionary = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
    }
    if (dictionary?.[value]) return dictionary[value]
    return dictionary[1].repeat(value)
}
module.exports = toRomanNumerals;