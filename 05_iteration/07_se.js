const nums =[1,2,3,4,5,6,7,8]
let newNums = nums.map((val)=>val+10)
console.log(newNums);
newNums = nums.map((val)=>{ return val+10})//here scope is open so retunrn is ereqire
console.log(newNums)

//chaning 
const n2 = nums
            .map((num)=>num*100)
            .map((num)=>num+1)
            .filter((num)=>num>450  )
console.log(n2);

//redued
const total =nums.reduce((acc, ccur)=>(acc+ccur),0)
console.log(total);
