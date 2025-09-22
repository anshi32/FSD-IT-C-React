// const div = document.getElementsByTagName("div");
// div[0].innerText = "Hello World"; 
// div[0].style.color="white";
// div[0].style.backgroundColor="black";
// console.log(div);


const container=document.getElementsByClassName("container");
container[0].innerHTML="<h2 style=color:red>Hello World</h2>";
console.dir(container);
const h2=document.createElement("h2");
h2.innerText="ABES Engineering College";
h2.style.color="white";
h2.style.backgroundColor="brown";
console.log(h2);
container[0].appendChild(h2);


// const img=document.createElement("img");
// img.src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg";
// img.setAttribute("height","200px");
// img.setAttribute("width","200px")
// console.log(img);
// container[0].appendChild(img);


const button=document.getElementById("btn");
const text=document.getElementById("text");
console.log(button)

// document.getElementById("text").innerHTML="<h>Loading image...</h>"
function msg(){
    document.getElementById("text").innerHTML="<h>Loading image...</h>"
    setTimeout(()=>{
        const img=document.createElement("img");
    img.src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg";
    img.setAttribute("height","200px");
    img.setAttribute("width","200px")
    console.log(img);
    document.getElementById("text").innerHTML="<h2>Javascript</h2>"
    container[0].appendChild(img);
},1000);
    // console.log("Hellooo, I'm working on DOM");
    //alert("You clicked this");
}
button.addEventListener("click",msg);
// button.addEventListener("click", function(){
//     text.innerText="Hello";
//     text.style.backgroundColor="lightblue";
// })