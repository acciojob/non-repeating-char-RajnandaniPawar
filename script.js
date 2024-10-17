function firstNonRepeatedChar(s) {
 const charCount = {};

    // First loop: count the frequency of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second loop: find the first character with count 1
    for (let char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Return null if no non-repeated character is found
    return null;
}
		
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
