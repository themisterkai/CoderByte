function NumberAddition(str) { 

  // code goes here
  var counter=0;
  for(x=0;x<str.length;x++){
    if(/[0-9]/i.test(str[x])){
      counter+= parseInt(str[x],10);
    }
  }
  
  return counter; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());   

//There are several incorrect test cases
//This code adds each digit as its own number, ie 77 will be 7 & 7 instead of 77
//When the input was "T1wo Ho33uses" your output was incorrect.
//When the input was "1 2 3 4 k10" your output was incorrect.
//When the input was "Won90 8" your output was incorrect.
//When the input was "One12 12" your output was incorrect.