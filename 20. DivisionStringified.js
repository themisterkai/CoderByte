function DivisionStringified(num1,num2) { 
  
  var quotient = Math.ceil(num1/num2).toString();
  var length = quotient.length;
  //return length;
  
  if(length==7){
    return quotient.substring(0,1)+","+quotient.substring(1,4)+","+quotient.substring(4,7);
  }
  else if(length==6){
    return quotient.substring(0,3)+","+quotient.substring(3,6);
  }
  else if(length==5){
    return quotient.substring(0,2)+","+quotient.substring(2,5);
  }
  else if(length==4){
    return quotient.substring(0,1)+","+quotient.substring(1,4);
  }
  else{
    return quotient;
  }

  // code goes here  
  //return num1 + num2; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());    

//this code needs to be rewritten, it works but it only works with brute force
//it only works for up to 7 character quotients