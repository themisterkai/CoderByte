function ThreeFiveMultiples(num) { 

  // code goes here
  var counter=0;
  var arr=[];
  for(x=num;x>0;x--){
    arr.push(x);
  }
  //return arr;
  for(i=0;i<arr.length;i++){
  if(arr[i]%3==0&&arr[i]%5!=0){
    counter+=arr[i];
  }
  else if(arr[i]%5==0&&arr[i]%3!=0){
    counter+=arr[i];
    //return arr[i]
  }
  else if(arr[i]%3==0&&arr[i]%5==0){
    counter+=arr[i];
  }
  }
  return counter-1; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThreeFiveMultiples(readline());  

//This is incorrect, needs to be rewritten