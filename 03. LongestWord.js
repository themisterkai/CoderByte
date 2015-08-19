function LongestWord(sen) { 
	var longest = "";
	var wordArray = sen.split(" ")
	for(x=0;x<wordArray.length;x++){
		if(wordArray[x].length>longest.length){
			longest = wordArray[x];
		}
	}
	return longest;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());    