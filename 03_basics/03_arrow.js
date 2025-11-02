const obj ={
    username:"sankalp",
    age : 23,
    welcomeMessage:function(){
        console.log(`${this.username}`,"welcome baby");
        
    }

}
// this varaiable use for the current context ooof the variabe
//inside an function this is generaly not used 
// function(){
//     const one = "hello "
//     console.log(this.one);
    
// }
////+++++++++++++++// arrow function  \\++++++++++++++++++////
const chai = ()=>{  
    //  const one = "hello "
    console.log(this.one);
    
 }//Impilcite arrow function\
 const chaoudary = ()=>(num1 +  num2 )//no retunrn require if round brackets is used
 //return an 



 