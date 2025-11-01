// in arrays it share the shallow properties in which if any changes occur to copy 
// arrayy then original array get afftect
//deep copy -> occur change in copy not share same refrence 

const mnae =[1,2,3,4]
const arr = new Array(1,2,3,4,5)

// array method 
arr.push(2);
arr.pop()
arr.unshift( 0)// add the value at the 0 idx
arr.shift()//undo unshift opp
arr.indexOf(4);// checks the value present 
const newArr=arr.join()//bind the data and convert in string
// slice and splice );
arr.slice()//== it doest not manipulat the original arr
arr.splice () // includes range aand modify it by the given values
