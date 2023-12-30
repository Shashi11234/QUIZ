let inputs=document.getElementById("inp");
let text=document.querySelector(".text");

function fun(){
    if(inputs.value==""){
       alert("plz enter");
    }
   else{ 
    let newEle=document.createElement("ul");
    newEle.innerHTML=`${inputs.value}<i class="fa fa-trash-o" style="font-size:28px;color:red"></i>`;
    text.appendChild(newEle);
    inputs.value="";
}
}