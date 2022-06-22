// object for finding the ones digit phrase for the minutes if tens digit not 1
let ones_digits = {
    "1": "one",
    "2": "two", 
    "3": "three", 
    "4": "four", 
    "5": "five", 
    "6": "six", 
    "7": "seven", 
    "8": "eight", 
    "9": "nine"
};

// object for finding the minutes phrase if tens digit is equal to 1
let tens_digit_one = {
    "0": "ten",
    "1": "eleven",
    "2": "twelve", 
    "3": "thirteen", 
    "4": "fourteen", 
    "5": "fifteen", 
    "6": "sixteen", 
    "7": "seventeen", 
    "8": "eighteen", 
    "9": "nineteen"  
}

// object for finding the tens digit phrase for the minutes if not 1
let tens_digits = {
    "0": "oh",
    "2": "twenty", 
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
}

// object for finding the phrase for the hour
let hours_digits = {
    "0": "twelve",
    "1": "one",
    "2": "two", 
    "3": "three", 
    "4": "four", 
    "5": "five", 
    "6": "six", 
    "7": "seven", 
    "8": "eight", 
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve"
};


function hours(val) {
    // if the hour val is 00-09, find the hour phrase using 0-9
    if (val.slice(0,1) === "0") return hours_digits[val.slice(1)]
    // if the val is 10, 11, 12 find the hour phrase directly
    if (+val >= 10 && +val <= 12) return hours_digits[val]
    // if the phrase is 13-23, subtract 12 then find the hour phrase
    else {
        // 13 becomes 1, 23 becomes 11
        val = +val - 12;
        // find the hour phrase using the new value
        return hours_digits[val]
    }
}

function minutes(val) {
    // determine the minutes tens digit
    let min_tens = val.slice(0, 1);
    // determine the minutes ones digit
    let min_ones = val.slice(1);
    // if the minutes is 00, don't continue. return o'clock
    if (min_tens === "0" && min_ones === "0") return "o'clock"
    // if the tens digit is a 1, we need to use the the object that gives words
    // for numbers ten-nineteen, since it doesn't follow the normal pattern
    if (min_tens === "1") {
        return tens_digit_one[min_ones]
    }
    // if the ones digit is a 0 (other than 10), we only need the tens digit phrase
    else if (min_ones === "0") {
        return tens_digits[min_tens]
    }
    // find the phrase for the tens digit and the ones digit and return the combined phrase
    else {
        let tens_phrase = tens_digits[min_tens];
        let ones_phrase = ones_digits[min_ones];
        let phrase = `${tens_phrase} ${ones_phrase}`
        return phrase
    }
}

function suffix(val) {
    // if the two digits are 0-11, it is morning
    if (+val >= 0 && +val <=11) {
        return "am"
    }
    // if the two digits are 12-23, it is evening
    if (+val >=12 && +val <=23) {
        return "pm"
    }
}

function timeWord(val) {
    // don't continue on if the time is midnight or noon
    if (val === "00:00") return "midnight";
    if (val === "12:00") return "noon";
    // take the first two digits and pass it into the hours function
    let hours_phrase = hours(val.slice(0,2));
    // take the last two digits and pass it into the minutes function
    let minutes_phrase = minutes(val.slice(3));
    // take the first two digits and pass it into the suffix function
    let suffix_phrase = suffix(val.slice(0,2))
    // return the entire phrase
    return `${hours_phrase} ${minutes_phrase} ${suffix_phrase}`
}

module.exports = {ones_digits, tens_digit_one, tens_digits, hours_digits, hours, minutes, suffix, timeWord}