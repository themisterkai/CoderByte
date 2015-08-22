function TimeConvert(num) { 

  // code goes here
  var hour=0;
  
  while(num>=60){
    hour++;
    num-=60;
  }
  
  return hour+":"+num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());   