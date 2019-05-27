// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    //course solution
    let max = 0;
    let maxChar = '';

    for (let char of str) { // remember helper: starts with 'o' but not iterating over an object - using 'of'
        //!charMap[char] ? charMap[char] = 1 : charMap[char]++;
        //charMap[char] = charMap[char] + 1 || 1; // course approach
        //course approach 2
        if (charMap[char]){
          charMap[char]++;
        } else {
          charMap[char] = 1;
        }
      };
      
      //return Object.keys(charMap).reduce((a, b) => charMap[a] > charMap[b] ? a : b);

      //course solution
      for (let char in charMap) { // iterating over an object - using 'in'
        if (charMap[char] > max) {
          max = charMap[char];
          maxChar = char;
        }
      }

      return maxChar;
}

module.exports = maxChar;
