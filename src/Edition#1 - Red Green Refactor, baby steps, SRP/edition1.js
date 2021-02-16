function multipleThree(value) {
    return value % 3 === 0;
}

function multipleFive(value) {
    return value % 5 === 0;
}


function multipleFifteen(value) {
    return value % 15 === 0;
}



function fizzbuzz(value) {
    if (multipleFifteen(value)) {
        return 'FizzBuzz';
    }
    if (multipleThree(value)) {
        return 'Fizz';
    }
    if (multipleFive(value)) {
        return 'Buzz';
    }
    return value;
}

function fizzbuzz_output(iterations) {
    const tableau = [];
    for ( var i = 1; i <= iterations ; i++) {
        tableau.push(fizzbuzz(i));
    }
    return tableau;
}
module.exports = {fizzbuzz, fizzbuzz_output};


