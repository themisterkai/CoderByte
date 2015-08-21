function DivisionStringified(num1,num2) { 
  
  var quotient = Math.round(num1/num2).toString();

  quotient = quotient.split("").reverse().join("");
  var holder = [];
  
  for(x=0;x<quotient.length;x+=3){
    for(i=0;i<3;i++){
      holder.push(quotient[x+i]);
    }
    holder.push(",");
  }
  return holder.reverse().join("").substring(1)
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());  

