function DashInsertII(num) { 

  // code goes here  
  num=num.toString();
  var arr=[];
  
  for(x=0;x<num.length;x++){
    arr.push(num[x]);
    if(num[x]%2>0&&num[x+1]%2>0){
      arr.push("-");
    }
    else if((num[x]!=0&&num[x+1]!=0)&&(num[x]%2==0&&num[x+1]%2==0)){
      arr.push("*");
    }
  }
  
  return arr.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsertII(readline());   