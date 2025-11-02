//syntax
function name(){
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    
}
name //referncece
name()//calling of function
function add (num1 , num2){
    console.log(num1+num2);
    
}
const red= add(3,4)//when no number is given the NaN
console.log(red);// here undfind due to no retuen

function add1 (num1 , num2){
     let res = num1+num2;
     return res
    
}
const res = add1(45,67)
