/*
function nice(name) {
    console.log("Hey "+name+" you are vey good boy");
    console.log("Hey "+name+" you are vey Interlligent boy");
    console.log("Hey "+name+" your cource is very good");
    console.log("Hey "+name+" your t-shirt is cool");
}
nice("Rohan")


function sum(a,b) {
    return a+b; 
}
result1=sum(3,8);
result2=sum(8,8);
result3=sum(3,5);

console.log("The of these numbers are: "+result1);
console.log("The result nof these numbers are :"+result2);
console.log("The result nof these numbers are :"+result3);
*/
function sum(a, b, c=3){
    return a+b+c;
}
result1=sum(3,1);
result2=sum(8,8);
result3=sum(3,5, 3);

console.log("The of these numbers are: "+result1);
console.log("The result nof these numbers are :"+result2);
console.log("The result nof these numbers are :"+result3);
console.log("---------------------------------------------------------------")

const funct1=(x) =>{
    console.log("I am a arrow function", x);
}
funct1(23);
funct1(32);
funct1(33);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++")

const person={
    name: "Ashraf Ali",
    role: "Lead Software Engineer",
    Company: "UKG",
    Age: 65,
    Add: "B62, Vishkarma Colony, New Delhi"
}
console.log(person)
console.log(person.Add)
console.log(person.Age);
console.log(person["Add"]);