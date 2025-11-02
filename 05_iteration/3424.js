 const num3 = [1,2,3,4,5,6,7,8,9];
const newNums = num3.filter((num3) =>num3>3
    
);
// console.log(newNums);
const newNums1 =[];
num3.forEach((num) => {
    if (num>4) {
        newNums.push(num)
        
    }
    
});
console.log(newNums);
