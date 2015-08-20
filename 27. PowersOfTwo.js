function PowersofTwo(num) { 

  // code goes here  
  var isMultiple = false;
	for(x=num;x>1;x/=2){
		if(x%2==0){
		   isMultiple = true; 
		}
		else {
		    isMultiple = false;
		}
	}
	return isMultiple;      
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());  