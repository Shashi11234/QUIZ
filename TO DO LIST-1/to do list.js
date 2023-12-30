function fun(){
    let inputs=document.getElementById("inp");
    let text=document.querySelector(".text");
    if(inputs.value==""){
       alert("plz enter");
    }
   else{ 
    let newEle=document.createElement("li");
    newEle.innerHTML=`${inputs.value}<i class="fa fa-trash-o" style="font-size:25px;color:white;margin-left:50px;">
    </i><i class="fa fa-check" style="font-size:25px"></i>`;
    text.appendChild(newEle);
    inputs.value="";
    newEle.querySelector("i").addEventListener("click",remove);
    function remove(){
        newEle.remove()
    }
    newEle.querySelector("fa fa-check").addEventListener("click",DONE);
    function DONE(){
        newEle.style.textDecoration="line-through";
    }
}
 
}