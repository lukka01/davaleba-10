// document.write("Hello World!");

// window.alert("please, accept the cookies!");

console.log("Hello, I am console log");

console.log(document.getElementById("myname").innerHTML);

document.getElementById("myname").innerHTML = "jondo";

console.log(5); // number 
console.log('5'); // string

console.log("don't tell me what to do");

var saxeli = "salome";





saxeli = "jondo"; // saxeli - string
console.log(saxeli);

saxeli = 7;
console.log(saxeli);

var a=4, b=6;
console.log(a+b);

var firstname= "jondo", lastname = "baghaturia";

console.log(firstname + " " +lastname);

{
    let r=4;
    console.log(r);
}
// console.log(r);

{
    let x='5', y='6';
    let xricxvi = parseInt(x), yricxvi = parseInt(y);
    console.log(xricxvi + yricxvi);

    let a=5, b=6;
    let asityva = a.toString(), bsityva = b.toString();
    console.log(asityva + bsityva);

}

{
    let a=7, b=2;
    a = a+b; // a = 7+2   a=9
    console.log(a);
    a = a-b;
    console.log(a);
    // a=7, b=2
    a += b; // a = a+b
    console.log(a);
    // a=9, b=2
    a -= b;
    console.log(a);
    // a=7
    a *= b;
    console.log(a);
    // a=14
    b=3;
    a /=b;
    console.log(a);
    a = 14;
    // 14/3    4   2     2 14-2 
    a %= b;
    console.log(a);
}

{
    let a=8, b=3, c=a<b; // boolean
    console.log(c);

    if(c){
        console.log("მართალია");    
    }
    else{
        console.log("ტყუილია");
    }
}

{
    let ricxvi = -9;

    if(ricxvi == 0){
        console.log(ricxvi + " nulis tolia");
    }
    else if(ricxvi > 0){
        console.log(ricxvi + " dadebitia");
    }
    else{
        console.log(ricxvi + " uaryofitia");
    }
}
{
    let op = "+", a=5, b=2;
    switch(op){
        case "+":
            console.log(a+b);
        break;
        case "-":
            console.log(a-b);
        break;
        case "*":
            console.log(a*b);
        break;
        case "x":
            console.log(a*b);
        break;
        case "/":
            console.log(a/b);
        break;
        case ":":
            console.log(a/b);
        break;
        default: "ar agirchevia operatori, bato!";
    }
}

{
    for(i=10; i>4; i--){
        console.log(i);
    }
    let a=0;
    while(a<10){
        console.log(a);
        a++;
    }
}

document.getElementById("test").innerHTML = '<a href="#">damaklike</a>';

let anteba = () => {
    document.getElementById("light").src = "img/on.png";
}

let chakroba = () => {
    document.getElementById("light").src = "img/off.png";
}


    

