var  a = "00", n1=0 ,n2=0,sum=0;
var sub1=0,sub2=0,sub3=0;
function buttonclick(val){
   var four=Number(document.getElementById("input1").value)

    document.getElementById("input1").value+=val;
    
}
function cleardisplay(){
    var n = " ";
    document.getElementById("input1").value=n;

}

function add(){
    
    n1=Number(document.getElementById("input1").value);
   
    document.getElementById("input1").value="+";  
}

function subtraction(){
    sub1=Number(document.getElementById("input1").value);
    document.getElementById("input1").value="-";
}

function equal(){
    
    n2=Number(document.getElementById("input1").value);
    sub2=Number(document.getElementById("input1").value);
    sum=n1+n2;
    sub3=sub1-sub2;
    document.getElementById("input1").value=sum;
    
   
   // sub3=sub1-sub2;
    document.getElementById("input1").value=sub3;

}
