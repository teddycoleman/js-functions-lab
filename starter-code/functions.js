// Question 1
function maxOfTwoNumbers(a, b) {
	if (a >= b){
		return a;
	}
	else {
	 	return b;
	} 
}


// Question 2
function maxOfThree(a, b, c) {
	if(a >= b && a >= c){
		return a;
	}
	else if (b >= c && b >= a) {
		return b;
	}
	else {
		return c;
	}
}

// Question 3
function isCharacterAVowel(str) {
	if (str.match(/[aeiouAEIOU]/)){
		return true;
	}
	else {
		return false;
  	}
}

// Question 4
function sumArray(arr) {
	var total = 0;
	arr.forEach(function(el){
		total += el; // total = total + el;
	});
	return total; 
}


// Question 4
function multiplyArray(arr) {
	var total = 1;
	arr.forEach(function(el){
		total *= el; // total = total * el; 
	});
	return total; 
}


// Question 5
var numberOfArguments = function(){
	return arguments.length;
}



// Question 6
var reverseString = function (str){
	return str.split("").reverse().join("");
};


// Question 7
function findLongestWord (arr) {
	var longest = 0;
	for(i = 0; i < arr.length; i++){
		if (arr[i].length > longest ) {
			longest = arr[i].length;
		}
	}
	return longest;
}


// Question 8
function filterLongWords (arr, num) {
	var longWords = [];
	for(i = 0; i < arr.length; i++){
		if (arr[i].length > num ) {
			longWords.push(arr[i]);
		}
	}
  	return longWords;
}


// Bonus 1
// (hint: `prototype`)

String.prototype.reverseString = function(){
	return this.split("").reverse().join("");
}


// Bonus 2
function charactersOccurencesCount(str) {
	var countOfLetters = {};
	for(i = 0; i < str.length; i++){
		if(!countOfLetters[str[i].toLowerCase()]){
			if(str[i].match(/[a-zA-Z]/)){
				countOfLetters[str[i].toLowerCase()] = 1;	
			}
		}
		else{
			countOfLetters[str[i].toLowerCase()] += 1;
		}
	}
	return countOfLetters;
}

