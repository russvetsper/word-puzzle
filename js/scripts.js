$(function (){
$("form#inputletters").submit(function(event){
  event.preventDefault();
var userInput=$("input#origenal").val();//"How are you?"
var a=userInput;
var vowel=["a","e","i","o","u"];
for(var i=0; i<5;i++){
 a=a.replace(vowel[i],"-");

};
$("#vowelReplace").append(a);
});
});
//H-w -r- y--?
//another soluation by steven and s
//
// var inputs=$("input#origenal").val().toLowerCase().split("");//"How are you?"
// var outputs =inputs.map(function(input){
// if(input==="a"||input==="e"||input==="i"||input==="o"||input==="u"){
//   return "-";
// }else{
//   return inputs;
// }
//$("#output ul").append(outputs.join(""));
// })
