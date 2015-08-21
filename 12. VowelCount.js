function VowelCount(str) { 
  
  var vowels=0;
  
  for(x=0;x<str.length;x++){
    if(/[a,e,i,o,u]/i.test(str[x])){
      vowels++
    }
  }

  // code goes here  
  return vowels; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());    