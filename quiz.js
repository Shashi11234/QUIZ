var level=1;
function increament(){
    level++;
    document.getElementById("introo").style.display="none"
    document.getElementById("stage11").style.display="none"
    document.getElementById("stage22").style.display="none"
    document.getElementById("stage33").style.display="none"
    document.getElementById("stage44").style.display="none"
    document.getElementById("stage55").style.display="none"
    document.getElementById("resultid").style.display="none"
    console.log(level)
    if(level==1){
        document.getElementById("introo").style.display="block"
    }
        else if(level==2){
            document.getElementById("stage11").style.display="block"
        }
        else if(level==3){
            document.getElementById("stage22").style.display="block"
        }
        else if(level==4){
            document.getElementById("stage33").style.display="block"
        }
        else if(level==5){
            document.getElementById("stage44").style.display="block"
        }
        else if(level==6){
            document.getElementById("stage55").style.display="block"
        }
        else{
            document.getElementById("resultid").style.display="block"
        }
}
function decrease(){
    level--;
    document.getElementById("introo").style.display="none"
    document.getElementById("stage11").style.display="none"
    document.getElementById("stage22").style.display="none"
    document.getElementById("stage33").style.display="none"
    document.getElementById("stage44").style.display="none"
    document.getElementById("stage55").style.display="none"
    document.getElementById("resultid").style.display="none"
    console.log(level)
    if(level==1){
        document.getElementById("introo").style.display="block"
    }
        else if(level==2){
            document.getElementById("stage11").style.display="block"
        }
        else if(level==3){
            document.getElementById("stage22").style.display="block"
        }
        else if(level==4){
            document.getElementById("stage33").style.display="block"
        }
        else if(level==5){
            document.getElementById("stage44").style.display="block"
        }
        else if(level==6){
            document.getElementById("stage55").style.display="block"
        }
        else{
            document.getElementById("resultid").style.display="block"
        }

}

