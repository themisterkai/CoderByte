function FormattedDivision(num1,num2) { 

  // code goes here  
  var number = (num1/num2).toFixed(4).toString().split(".");
  var quotient = number[0];
  var decimal = number[1];

  quotient = quotient.split("").reverse().join("");
  var holder = [];
  
  for(x=0;x<quotient.length;x+=3){
    for(i=0;i<3;i++){
      holder.push(quotient[x+i]);
    }
    holder.push(",");

  }
  return holder.reverse().join("").substring(1)+"."+decimal;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FormattedDivision(readline());   