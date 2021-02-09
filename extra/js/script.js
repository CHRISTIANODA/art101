// console.log("my javascript loaded");
// var nameVar = "Christian";
// var numNumb = 21;
// console.log(nameVar);
// console.log(numNumb);
// numNumb = 25;
// console.log(numNumb);
// numNumb = 4;
// console.log(numNumb);




function firstThing(test){
  console.log(test + ":This is the third thing");
}




function firstFunction(){
  console.log("this is my first function");
  console.log(numNumb);
  console.log(nameVar);
}
function testBigger (firstNum,secondNum){
  console.log("First Number: "+firstNum+" Second Number: "+secondNum+" comparison: " + (firstNum>secondNum) );
  // console.log(firstNum>secondNum);
}
var nameVar = "Christian";
var numNumb = 17;
firstFunction();
// firstFunction();
// numNumb = numNumb + 7;
testBigger(5,8);


function testBigger (firstNum,secondNum){
 console.log("First Number: "+firstNum+" Second Number: "+secondNum+" comparison: " + (firstNum>secondNum) );
}
  // console.log(firstNum>secondNum);
//   testBigger(12,5);
  // function changeBCK(divID){
      //divid -> backgroundcolor(color)


  // changeBCK("testDiv_id","red");
  // changeBCK("test1Div_id","black")



  function testBiggerWithReturn (firstNum,secondNum){
    var result;
    result = firstNum+secondNum;

    return result;

  }
  var sum = testBiggerWithReturn(8,5);
  console.log(sum);
  sum = sum + 8;
  console.log(sum);



function userName (firstName,middlename,lastName){
  var result = firstName + " " + lastName;
  return result;
}

console.log(userName("Christian"," ","Oda"))


var myVarFun = function(){
console.log("Functions are nice");
}

setTimeout(myVarFun,2000)
setTimeout(function(){
    console.log("asdfghjkl");
}, 2000);
