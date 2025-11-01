//Dates 
const dATE = new Date();
console.log(dATE)
console.log(dATE.toISOString())
console.log(dATE.toJSON())
console.log(dATE.toISOString())
console.log(dATE.toString())

const myCereatedDate = new Date(2025,0,19)
const myCereatedDate3= new Date(2025,0,19 , 5 , 4)
// console.log(myCereatedDate.toDateString());
console.log(myCereatedDate3.toLocaleDateString());
 
let mystamp = Date.now()//->give give value jan 1 1970 t0 toadys day sceond
console.log(mystamp);
console.log(myCereatedDate.getTime());

