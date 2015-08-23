function CountingMinutes(str) { 

  // code goes here  
  var arr = str.split("-");
 
  var time1 = arr[0].split(":");;
  var hour1 = parseInt(time1[0]);
  var minute1 = parseInt(time1[1].substring(0,2));
  var am1= time1[1].slice(2);

  
  var time2 = arr[1].split(":");;
  var hour2 = parseInt(time2[0]);
  var minute2 = parseInt(time2[1].substring(0,2));
  var am2= time2[1].slice(2);
  
  if(hour1==12){
    hour1=0;
  }
  if(hour2==12){
    hour2=0;
  }
  
  if(am1=="pm"){
    hour1+=12;
  }
  if(am2=="pm"){
    hour2+=12;
  }
  //return hour2;
  
  var hourDiff=hour2-hour1;
  var minuteDiff=minute2-minute1;
  
  var diff= hourDiff*60+minuteDiff;
  if(diff<0){
    diff+=1440;
  }
  return diff;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutes(readline());   