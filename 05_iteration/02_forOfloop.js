// for of 
const arr =[1,2,3,4,5,6]
for (const val of arr) {
     console.log(val);
     
}
// map 
const map = new Map()
map.set("hello ","bhai")
map.set("millo", "bhai")
console.log(map);
for (const [keys , value ] of map) {
    console.log(keys , "=>" , value);
    
    
}
