function ThreeFiveMultiples(num) { 

  // code goes here 
  var counter=0;
  for(x=num-1;x>0;x--){
    if(x%3==0||x%5==0){
      counter+=x;
    }
  }
  return counter;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThreeFiveMultiples(readline());  