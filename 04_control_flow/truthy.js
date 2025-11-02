const email ="helathy@gamil"
if(email){
    console.log("presnrt");
    
}
else{
    console.log("absent");
    
}
//falsy value
//false , 0 , -0 , bigint 0n,null , undefine ,"",Nan

//truthy value(exceprt falsy all are truthy )
//=> "0",[],{},function(){}

//....nullish coalescing operator ...//
let val1  =null;
val1 = 5??10;
val1 = null??10;
val1 = undefined??10;
/*The nullish coalescing operator (??) in JavaScript is used to provide a default value when a variable is null or undefined.

🧠 Syntax:
let result = value1 ?? value2;


If value1 is not null or undefined, then result = value1

If value1 is null or undefined, then result = value2  */