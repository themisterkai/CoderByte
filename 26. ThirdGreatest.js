function ThirdGreatest(arr) { 

  // code goes here  
	var myArray =[];
    	var Count =[];
    	
	for(x=0;x<arr.length;x++){
		myArray.push([arr[x].length, arr[x]]);
	}
	
	for(i=0;i<myArray.length;i++){
	   Count.push(myArray[i][0]);
	}
	Count = Count.sort(function(a, b){return b-a});
	

    for(j=0;j<myArray.length;j++){
        if(Count[2]==myArray[j][0]){
            return myArray[j][1];
        }
    }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());    