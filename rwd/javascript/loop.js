// while loop
a=5;
while(a>0){
    document.write(a," <br>");
    a--;
}
document.write("<hr>");

// do-while

a=1;
do{
        document.write(a," <br>");
    a++;
}while(a<=5)
document.write("<hr>");


// for loop

for(b=1;b<10;b++){
    document.write("* ");
}
document.write("<hr>");
for(b=1;b<10;b++){
    document.write("* <br>");
}

// nested for loop

document.write("<hr>");
for(b=1;b<10;b++){
    for(c=1;c<=10;c++){
    document.write("* ");
    }
    document.write("<br>")
}
document.write("<hr>");
for(b=1;b<10;b++){
    for(c=1;c<=b;c++){
    document.write("* ");
    }
    document.write("<br>")
}

document.write("<hr>");
for(b=1;b<10;b++){
    for(c=10;c>b;c--){
    document.write("* ");
    }
    document.write("<br>")
}

