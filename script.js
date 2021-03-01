var containerEle = document.body.querySelector(".container");

 var num1 = prompt("Type a number");
 if(isNaN(num1)){
    document.write(num1 + " is not a number. Hint: A number is a number chief.");
 }else{
    document.write(num1 + " is a number");
 }

var checkee= "==" == prompt("Type an operator")
if(checkee){
  containerEle.innerHTML="That is an operator";
}else{
  containerEle.innerHTML="That is not an operator. Hint: It's something that you type for coding in order to check if the value you put in is the same as the actual value for this code sequence.";
}

 var num2 = prompt("Type a number");
 if(isNaN(num2)){
    document.write(num1 + " is not a number. Hint: A number is a number chief.");
 }else{
    document.write(num1 + " is a number");
 }