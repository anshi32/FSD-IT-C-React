// console.log("Hello World")
// var a=13;
// console.log(a);

// console.log(a);
// var a=30;

// var a=50;
// if(a>10){
//     var a=100;
//     console.log("a="+a);
// }else{
//     console.log("no");
// }
// console.log("hooo "+a);

// const a=23;
// a=50;

// function fun(msg){
//     return "Heyy..."+msg;
// }
// const data=fun("Greetings!");
// console.log(data);

// const data=function(a,b){
//     return a*b;
// }
// console.log(data(12,20));

//Arrow function
// const data=(text)=>{
//     console.log("This is an arrow function."+text)
// }
// data("You know this.");

// const data=msg=>msg;
// console.log(data("Good morning."));

//IIFE
// (function(){
//     console.log("MERN Stack");
// })();

// setTimeout(()=>{
//     console.log("Hiii")
// },1000);

// function greet(msg="Java"){
//     console.log(msg+" is a good programming language.");
// }
// greet("Python");

function selectLanguage(lang="Python"){
    let result;
    if(lang=="java"){
        function javacompiler(){
            return "using java compiler";
        }
        result=javacompiler();
    }
    else if(lang=='c'){
        function ccompiler(){
            return "Using C compiler";
        }
        result=ccompiler();
    }
   else{
    result="No compiler found!";
   }
   return result;
}
console.log(selectLanguage("golang"));