function firstNonRepeatedChar(str) {
 // Write your code here
	 let char_count = {}
    
    // # First loop to count the frequency of each character
    for char in s:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1

    // # Second loop to find the first character with count 1
    for char in s:
        if char_count[char] == 1:
            return char
    
    // # If no non-repeated character is found, return null
    return null
		
}
		
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
