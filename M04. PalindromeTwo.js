function PalindromeTwo(input) { 

  // code goes here  
    var str = input.replace(/\s/g, '').replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  	var middle = (str.length-1)/2;
	var first=[];
	var end=[];

	//code below not needed because of how I did the for loop
	//if(str.length%2==0){
	//	middle=(str.length)/2;
	//}
	//else {
	//	middle=(str.length-1)/2;
	//}

	for(x=0;x<middle;x++){
		first.push(str[x]);
	}

	for(x=str.length-1;x>middle;x--){
		end.push(str[x]);
	}

	if(first.join() === end.join()){
		return true;
	}
	else{
		return false;
	}     
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline()); 