function StringScramble(str1,str2) { 

  // code goes here  
	first = str1.split("").sort().join();
	second = str2.split("").sort().join();

	if(first == second){
		return true;
	}
	else {
		return false
	}
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());   