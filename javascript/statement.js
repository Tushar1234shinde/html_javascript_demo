for(a=1;a<=10;a++){
    if(a%2==0){
         document.write(a," <br>");
  
    }
    else{
continue;
    }
}

document.write("<hr>");
for(a=1;a<=10;a++){
if(a==8){
    continue;
}
document.write(a," <br>");
}

document.write("<hr>");
for(a=1;a<=10;a++){
if(a==8){
    break;
}
document.write(a," <br>");
}

document.write("<hr>");