function FirstReverse(str) { 

  // code goes here  
  //return str; 
  myArray = [];
  for(x=str.length-1;x>=0;x--){
    myArray.push(str[x]);
  }
  return myArray.join("");
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());  