function TripleDouble(num1,num2) { 
	num1 = num1.toString();
  	num2 = num2.toString();
  	//return num1;
  
  // code goes here
  var value = false;
  for(x=0;x<num1.length;x++){
    
    if(num1[x]==num1[x+1]&&num1[x+1]==num1[x+2]){
      //return num1[x];
      value = true;
    }
  }
  //return value;
  if(value==true){
    for(i=0;i<num2.length;i++){
      if(num2[i]==num2[i+1]){
        return 1;
      }
    }
  }
  return 0;
  
  //return num1 + num2; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TripleDouble(readline());           
