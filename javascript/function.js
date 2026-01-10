function add(){
document.write(2+8);
}

add();

document.write("<hr>");

function sub(a,b){
document.write(a-b);
}

sub(7,5);

document.write("<hr>");

function mul(x,y){
    z=x*y
    document.write(z,"<br>");
    return z;
}

l=mul(20,5);
document.write(l,"<hr>")

alert("Hello User");

var ival=  eval("10*5+5");

document.write(ival);

document.write("<hr>");

var num= parseInt("17.0abc");

document.write(num);
document.write("<hr>");

var num1= parseFloat("0275.37abf467");
document.write(num1);
document.write("<hr>");


alert("Welcome to JavaScript");
var uname= prompt("Enter your name:");
document.write("Hello ",uname);
document.write("<hr>");
var conf= confirm("Do you want to proceed?");
document.write(conf);
document.write("<hr>");
