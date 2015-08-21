function ExOh(str) { 
  
  var xCounter=0;
  var oCounter=0;
  
  for(i=0;i<str.length;i++){
    if(str[i]=="x"){
      xCounter++;
    }
    else if(str[i]=="o"){
      oCounter++;
    }
  }
  
  if(xCounter==oCounter){
    return true;
  }
  else {
    return false;
  }

  // code goes here  
  //return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());    