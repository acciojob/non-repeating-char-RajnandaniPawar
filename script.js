function firstNonRepeatedChar(str) {
 // Write your code here
	let str1 = {};
	for(let char of str){
		str1[char] =(str1 || 0)+ 1;
	}
	for(let char of str){
		if(str1(char) === 1){
			return char;
		}
		return null
	}
		
}
		
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
