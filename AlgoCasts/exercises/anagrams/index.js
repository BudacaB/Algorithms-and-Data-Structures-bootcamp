// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const finalStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    const finalStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    const charMapA = {};
    const charMapB = {};

    for(char of finalStringA) {
        !charMapA[char] ? charMapA[char] = 1 : charMapA[char]++;
    }

    for(char of finalStringB) {
        !charMapB[char] ? charMapB[char] = 1 : charMapB[char]++;
    }

    if (Object.keys(charMapA).length === Object.keys(charMapB).length && finalStringA.length === finalStringB.length) {
      let arr =[];
      for (i = 0; i < Object.keys(charMapA).length; i++) {
        if (charMapA[Object.keys(charMapA)[i]] === charMapB[Object.keys(charMapA)[i]]) {
          arr.push(true)
        } else arr.push(false)
      }

      if (arr.every((value) => {
        return value === true
      })) {
        return true
      } else return false

    } else return false;
}
    
module.exports = anagrams;
