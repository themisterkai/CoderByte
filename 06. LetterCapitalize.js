function LetterCapitalize(str) { 
	var myArray = str.split(" ")
    var newArray =[]
    //return str.charAt(0).toUpperCase()+str.substr(1).toLowerCase()
  	
    //return str[0].toUpperCase() + str
    for(x=0;x<myArray.length;x++){
    newArray.push(myArray[x].charAt(0).toUpperCase()+myArray[x].substr(1).toLowerCase())
    }
   // }
  //return myArray.join(" ")
  // code goes here  
  return newArray.join(" "); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());       