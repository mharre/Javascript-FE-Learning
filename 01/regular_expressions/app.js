//let re;
// regular expressions use certain flags
//re = /hello/;
//re = /hello/i; // i = case insensitive
//re = /hello/g; // g = Global Search

//console.log(re);
//console.log(re.source);

// exec() - Return result in an array if match or null
//const result = re.exec('hello world');
//const result1 = re.exec('hi world');
//console.log(result);
//console.log(result1);
//console.log(result[0]);
//console.log(result.index);
//console.log(result.input);

// test() - Returns true or false if match
//const result = re.test('Hello');
//console.log(result);

// match() - Return result array or null
//const str = 'Hello There';
//const result = str.match(re);
//console.log(result);

// search() - Return index of first match, not found = -1
//const str = 'Hello There';
//const result = str.search(re);
//console.log(result);

// replace() - Return a new string with some or all of matches of pattern
//const str = 'Hello There';
//const newStr = str.replace(re, 'Hi');
//console.log(newStr);

let re;
// Literal Chars
// re = /hello/;

// Metacharacter Symbols
re = /^h/i; // Must start with 'h'
re = /World$/i; // Must end with whatever we put
re = /^hello$/i; // Must start/end with whatever we put
re = /h.llo/i; // Matches any ONE char (kind of like wildcard symbol) 
re = /h*llo/i; // Matches any char 0 or more (wildcard symbol) 
re = /gre?a?y/i; // optional char
re = /gre?a?y\?/i; // escape char

// Brackets [] - Character Sets
re = /gr[ae]y/i; // must be an a or e
re = /[GF]ray/i; // must be an a or e
re = /[^GF]ray/i; // must match anything except for G or F 
re = /[A-Z]ray/; // must match any upper case letters 
re = /[A-Za-z]ray/; // must match any letters 
re = /[0-9][0-9]ray/; // must match any range of nums 

// Braces - Quantifiers
re = /Hel{2}o/i; // letter before must occur {x} amount of times
re = /Hel{2,4}o/i; // letter before must occur {x} amount of times
re = /Hel{2,}o/i; // letter before must occur {x} atleast amount of times

// Parenthesis () - Grouping
re = /^([0-9]x){3}$/; // must begin with and end (3x*4 wouldn't work)

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric char(any letter, num or _)
re = /\w+/; // + = one or more (matches all chars)
re = /\W/; // Non Word Characters - anything but letter, num or _
re = /\d+/; // match any digit (+ will match all instead of just 1st)
re = /\D/; // Match non digit
re = /\s/; // match white space
re = /\S/; // match non white space
re = /Hell\b/i; // word boundary 

// Assertions
re = /x(?=y)/; // match x only if it's followed by y
re = /x(?!y)/; // match x only if it's not followed by y

// String to match
const str = 'asdasdasx'

const result = re.exec(str);
console.log(result);

function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re,str);