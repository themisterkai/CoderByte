function ABCheck(str) { 
  var value = false;
  var newStr = str.split("");//str.replace(/\s/g, '').toLowerCase();
  //newStr.split(" ");
  //return newStr;
  
  for(x=0;x<newStr.length;x++){
    if(newStr[x]=="a"&&newStr[x+4]=="b" || newStr[x]=="b"&&newStr[x+4]=="a" ){
      value= true;
    }
    
    
  }
  
  return value;

  // code goes here  
  //return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());       