function LetterChanges(str) { 

  var newWord = [];
  // code goes here 
  firstArray = "abcdefghijklmnopqrstuvwxyz *![&\/\\#,+()$~%.':?<>-_{}]".split("")
  secondArray = "bcdEfghIjklmnOpqrstUvwxyzA *![&\/\\#,+()$~%.':?<>-_{}]".split("")
  //return str.toLowerCase().replace(firstArray,secondArray);
  //return str[0].toLowerCase() == firstArray[0];
  //for(x=0; x<str.length; x++){
    //for(var y in firstArray){
      //  if (str.charAt(x) === firstArray[y])
   // str = str.replace(str.charAt(x), secondArray[y]);
    //}
    for(x=0; x<str.length; x++){
    for(y=0; y<firstArray.length; y++){
      if(str[x].toLowerCase()==firstArray[y]){
        //newWord = str.replace(str.charAt(x),secondArray[y]);
        newWord.push(secondArray[y]);
      }
    }
    }
 
    return newWord.join("");
                     
    
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());   