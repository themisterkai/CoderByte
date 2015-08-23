function DashInsert(str) { 

  // code goes here  
  var arr=[];
  
  for(x=0;x<str.length;x++){
    arr.push(str[x]);
    if(str[x]%2>0&&str[x+1]%2>0){
      arr.push("-");
    }

    // used %2>0 instead of %2!=0 because %2!=0is showing as true for undefined answers
  }
  return arr.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());     