// const div = document.getElementsByTagName("div");
// div[0].innerText = "Hello World"; 
// div[0].style.color="white";
// div[0].style.backgroundColor="black";
// console.log(div);


// const container=document.getElementsByClassName("container");
// container[0].innerHTML="<h2 style=color:red>Hello World</h2>";
// console.dir(container);
// const h2=document.createElement("h2");
// h2.innerText="ABES Engineering College";
// h2.style.color="white";
// h2.style.backgroundColor="brown";
// console.log(h2);
// container[0].appendChild(h2);


// const img=document.createElement("img");
// img.src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg";
// img.setAttribute("height","200px");
// img.setAttribute("width","200px")
// console.log(img);
// container[0].appendChild(img);


// const button=document.getElementById("btn");
// const text=document.getElementById("text");
// console.log(button)

// document.getElementById("text").innerHTML="<h>Loading image...</h>"
// function msg(){
//     document.getElementById("text").innerHTML="<h>Loading image...</h>"
//     setTimeout(()=>{
//         const img=document.createElement("img");
//     img.src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg";
//     img.setAttribute("height","200px");
//     img.setAttribute("width","200px")
//     console.log(img);
//     document.getElementById("text").innerHTML="<h2>Javascript</h2>"
//     container[0].appendChild(img);
// },1000);
    // console.log("Hellooo, I'm working on DOM");
    //alert("You clicked this");
//}
//button.addEventListener("click",msg);
// button.addEventListener("click", function(){
//     text.innerText="Hello";
//     text.style.backgroundColor="lightblue";
// })

// const button=document.getElementById('btn');
//     function longData(){
//         console.log("Start");
//         for(i=0;i<10000;i++){
//         console.log("End");
//         }
//     }
//     button.addEventListener("click",longData);


    // function greetMsg(){
    //     return "Welcome to college"
    // }
    // function msgHandler(msg,clbk){
    //     console.log(msg);
    //     const data=clbk();
    //     return msg+","+data;
    // }
    // const student=["Rahul","Aman","Vansh"];
    // student.forEach((name)=>{
    //     console.log(msgHandler(name,greetMsg));
    // })
    // const completemsg=msgHandler("Hi",greetMsg);
    // console.log(completemsg);


    // const mypromise=new Promise((resolve,reject)=>{
    //     const passord="45734";
    //     if(password.length>8){
    //         resolve("Password length is ok");
    //     }else{
    //         reject("Password length is not as per our policy");
    //     }
    // });

    // mypromise.then((result)=>{console.log(result)})
    // .catch((err)=>{console.log(err)})
    // .finally(()=>{
    //     console.log("All resources have closed successfully");
    // })

//    async function handleData(){
//         const data=await mypromise;
//         console.log(data);
//     }
//     handleData();

const button=document.getElementById("btn");
const disp=document.getElementById("disp");
let table="<table border=1>";
async function fetchData(){
    //alert("Boom");
    disp.innerHTML="<h2>Data is loading...</h2>"
    const response=await fetch('https://dummyjson.com/recipes');
    const jsonData=await response.json();
    console.log(jsonData.recipes);
    //disp.innerHTML=`<h2>${jsonData.recipes[0].name}</h2> <h2>${jsonData.recipes[0].ingridients}</h2>`;
    jsonData.recipes.forEach(element=>{
        table+=`<tr>
            <td><img src=${element.image} height=200 width=200 alt="image"></td>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.ingredients}</td>
        </tr>`
    })
    table+='</table>' ;
    disp.innerHTML=table;
    //console.log(jsonData);
    //console.log(response);
}
button.addEventListener("click",fetchData);

