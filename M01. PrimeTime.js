function PrimeTime(num) { 

  // code goes here 
  	var isPrime=true;
  
	var root = Math.ceil(Math.sqrt(num));
    for(var x=2;x<root+1;x++){
        if(num%x===0){
            isPrime=false;
        }
    }
    return isPrime;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());           