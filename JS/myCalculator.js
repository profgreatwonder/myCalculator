function gettypeIn(){
    return document.getElementById("typeIn-value").innerText;
}
// alert(gettypeIn());
function printtypeIn(num){
    document.getElementById("typeIn-value").innerText=num;
}

function  getresult(){
    return document.getElementById("result-value").innerText;
}

function printresult(num){
    if(num==""){
        document.getElementById("result-value").innerText=num;
    }
    else{
        document.getElementById("result-value").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;

}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var symbol = document.getElementsByClassName("symbol"); 
for(var i = 0;i<operator.length;i++){
    operator[i].addEventListner('click',function(){
        alert("the operator clicked:"+this.id);
    });
}

var number = document.getElementsByClassName("number"); 
for(var i = 0;i<number.length;i++){
    number[i].addEventListner('click',function(){
        var result=reverseNumberFormat(getresult());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}


// printresult(1234)

