const tinderUser = new Object()//singelton object 
// const tinderUser = {} non singelton object 
tinderUser.id = "1223an"
tinderUser.name = "snakalp"
tinderUser.isloggedIn = false
 console.log(tinderUser);

  const someUser ={
    username :{
        userfullnmae:{
            firstname: "hitehs",
            ijlastname : "aidar"
        }

    }
  }
 //merging the value 
 obj1 ={1:"a",2:"b"}
 obj2 ={3:"a",4:"b"}
 obj3 = {obj1 , obj2}
 obj4 = Object.assign({},obj1 , obj2)//{} it act as source and aother act as 
                                        // a traget  so all merger in  this {} else merge in obj1 
obj5 ={...obj1,...obj2}

//destructure 
course ={
     name : "js",
     price:" 999",
     teacher:"hitesh"
}
console.log(course.teacher);

//else 
const { teacher : t}=course
console.log(t);


