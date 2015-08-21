function NumberSearch(str) { 

  // code goes here  
  str = str.toLowerCase();
  var counter=0;
  var letters=[];
  for(x=0;x<str.length;x++){
    if(/[0-9]/i.test(str[x])){
      counter+= parseInt(str[x],10);
    }
  }
  
  for(x=0;x<str.length;x++){
    
    if(/[a-z]/i.test(str[x])){
      letters.push(str[x]);
    }
  }
  //return letters
  //return counter;
  return Math.round(counter/letters.length); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberSearch(readline());   