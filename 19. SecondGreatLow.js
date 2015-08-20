function SecondGreatLow(arr) { 
  
  // code goes here 
  	var results =[]
  	var numArray = arr.sort(function(a, b){return a-b});
	var greatest = (numArray[numArray.length-2]);
	if(arr.length<2){
		var second = numArray[0];
	}
	else {
		var second = numArray[1];
	}

   return second+" "+greatest; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());  

// this could be improved, two test cases are incorrect
// When the input was (2,2,2,5,5,5,6) your output was incorrect.
// When the input was (7, 7, 90, 1000003) your output was incorrect.
