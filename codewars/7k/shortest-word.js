// ------------------------------ Description ------------------------------
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
// ------------------------------ Solution ------------------------------   
function findShort(s){
    const splitStr = s.split(' ');
    let smallestLength = splitStr[0].length;
    for (const i of splitStr) {
      if (i.length < smallestLength) {
        smallestLength = i.length;
      }
    }
    return smallestLength;
}