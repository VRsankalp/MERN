  // Primitive 

  // 7 types  : String , Number , Boolean , null , Symbol , BigInt;

// dynamic type 

const id = Symbol('123')
const id1 = Symbol('123')
console.log(id===id1)// here both are not equal due to uniquly defined 


  // Reference Non Primitive 

  // Arrays,Objects , functions 

  //ARRAYS 
  const heros = ['shaktiman' , 'marvel']
   let myObj = {
       name : "hello",
       age : 34
   }
   console.log(myObj);
   
//    FUUNCTION DECLARE
 const myFunction = function(){
    console.log("hello");
    
 }
 //////////////////////////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++?////////////////////////////
   // MEMMORY 
  //  Stack(Primitive)  Heap(Non Primitive )\
  let my = "124234"
  let my2=  my 
  console.log(my);
  console.log(my2); /// here an copy of data is created so changes cannot affect the original array 

  let obj ={ 
    name:"sdfhsich",
    age:23
  }
  let obj2 = obj
  obj2.age = 34
  console.log(obj2.age); // here the values are same as they got the same refrence of data
  console.log(obj.age);
   
  


    
   
   
   
  