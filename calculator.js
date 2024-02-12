var  a = "00", n1=0 ,n2=0,sum=0,sub=0;


function buttonclick(val){
   var num =Number(document.getElementById("input1").value)

    document.getElementById("input1").value+=val;
    
}
function dot(point){
    document.getElementById("input1").value+=point;
}
function cleardisplay(){
    var n = " ";
    document.getElementById("input1").value=n;

}

function deleten(){
    let display = document.getElementById("input1");
    display.value = display.value.slice(0, -1);
    
}

function add(){
    
    n1=Number(document.getElementById("input1").value);
   
    document.getElementById("input1").value=""; 
    s = 1; 
}

function subtraction(){
    n1=Number(document.getElementById("input1").value);
    document.getElementById("input1").value="";
    s=2;
}
function multiplication(){
    n1=Number(document.getElementById("input1").value);
    document.getElementById("input1").value="";
    s=3;
}
function divide(){
    n1=Number(document.getElementById("input1").value);
    document.getElementById("input1").value=""
    s=4;
}
function mode(){
    n1=Number(document.getElementById("input1").value);
    document.getElementById("input1").value=""
    s=5;
}


function equal(){
    
    n2=Number(document.getElementById("input1").value);
        if(s == 1){
            sum = n1+n2;
        document.getElementById("input1").value=sum;

        }

        else if(s == 2){
            sub = n1-n2;
        document.getElementById("input1").value=sub;

        }
        else if(s == 3){
            mul = n1*n2;
        document.getElementById("input1").value=mul;

        }
        else if(s == 4){
            div = n1/n2;
            document.getElementById("input1").value=div;
        }
       else if(s == 5){
            div = n1%n2;
            document.getElementById("input1").value=div;
       }
   
    
   
   // document.getElementById("input1").value=sum;

    
    
 

}