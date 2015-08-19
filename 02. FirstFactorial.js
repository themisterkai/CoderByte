function FirstFactorial(num) { 

  // code goes here  
	myNum = 1;

	for(num.length-1;num>0;num--) {
		myNum*=num;
	}
	return myNum;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());    