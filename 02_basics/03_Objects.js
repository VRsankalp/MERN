// when we declare object using literals then singleton is created and from constructor not singelton not  formed
const sym = Symbol("hello")
const myObj ={
    name : "lala",
    sym :'hello',//it is a  symbol but type is string 
    [sym]:"gello",//it is a  symbol but type is symbol
    age : 21,
    days :["sunday ", "monday"],
    "full name":"sankalp srivastava"
}
// access data 
console.log(myObj.age);
// to acces the full name  use 
console.log(myObj["full name"]); 
// change 
myObj.age = 44
//freeze the obj 
// Object.freeze(myObj)
myObj.grettings = function(){
    console.log("hello");
    
}
console.log(myObj.grettings); //return function 
console.log(myObj.grettings());//hello


