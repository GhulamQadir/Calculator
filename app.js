function getNum(num){
    var input = document.getElementById("input");
    input.value += (num);
}

function clearResult(){
    var input = document.getElementById("input");
    input.value = "";
}
function getResult(){
    var input = document.getElementById("input");  
    input.value = eval(input.value);
}
function clearone(){
    var input = document.getElementById("input");
    var c = input.value;
    c = c.slice(0,-1);
    input.value = c;
}
