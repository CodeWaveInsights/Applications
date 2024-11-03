console.log("Hello I am conditional tutorial");
let age=0;
let grace=2;

if((age+grace)>18){
    console.log("You can drive");
}else{
    console.log("You can not Drive");
}
// console.log(age);
// console.log(age+grace)
// console.log(age-grace)
// console.log(age*grace)
// console.log(age/grace)
// console.log(age**grace)
// console.log(age%grace)

if(age==18){
    console.log("You can Drive");
}else if(age==0){
    console.log("Are you kidding");
}else if(age==1){
    "Are you again kidding";
}
else{
    console.log("You cannot driver");
}
/*
Translate to:
if(a>b){
let c=a-b;
}else{
let c=a-b;
}
*/
let c=a>b ?(a-b):(b-a);
console.log("Ternary Operator : ", c);