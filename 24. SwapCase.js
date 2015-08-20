function SwapCase(str) { 

  // code goes here
	newString = [];

	for(x=0;x<str.length;x++){
		if(str[x]==str[x].toUpperCase()){
			newString.push(str[x].toLowerCase());
		}
		else {
			newString.push(str[x].toUpperCase());
		}
	}
	return newString.join("")
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           
