//synchronous and asynchronous code
//blocking and non-blocking

/* console.log("start")

function getName(rollnumber){
       setTimeout(()=>{
           //send rollnumber to server and against that rollnumber ,get student name from server
           let name = "first"
           console.log(name)
       },2000) 
}


getName(102)

console.log("end") */




//callBack

/* console.log("start")

function getName(rollnumber, callback){
       setTimeout(()=>{
           //send rollnumber to server and against that rollnumber ,get student name from server
           let name = "John"
           callback(name)
       },2000) 
}
function getHobbies(name,callback){
    setTimeout(()=>{
        //sending request to server to get student's hobbies
        let hobbies = ["reading","coding"]
        callback(hobbies)
    },2000)
}


//callback hell
getName(102,(name)=>{
    console.log(name);
    getHobbies(name,(hobbies)=>{
        console.log(hobbies);
    })
})

console.log("end")  */



//converting callback hell into promises

/* console.log("start")

function getName(rollnumber){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           //send rollnumber to server and against that rollnumber ,get student name from server
           let name = "John"
           resolve(name)
       },2000) 
    })
       
}
function getHobbies(name){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        //sending request to server to get student's hobbies
        let hobbies = ["reading","coding"]
        resolve(hobbies)
    },2000)
    })
   
}


//Promise
getName(105)
.then(name=>getHobbies(name))
.then(hobbies=>console.log(hobbies))
.catch(err=>console.log(err))


console.log("end")  */
let obj={name:"Ali",age:30}
let jsondata= JSON.stringify(obj)
let originalObj= JSON.parse(jsondata)

// fetching real data from external API

/* fetch("https://reqres.in/api/users?page=2")//promise (asynchronous)
console.log(response)
.then(response=>response.json())// jsondata response(parse data)
.then(result=>{
    console.log(result)
    let ul=document.querySelector("ul")

    result.data.map(user=>{
        let firstname=document.createElement("h1")
        firstname.innerHTML=user.first_name

        let lastname=document.createElement("div")
        lastname.innerHTML=user.last_name
        let email=document.createElement("div")
        email.innerHTML=user.email
        let img=document.createElement("img")
        img.src=user.avatar
        let Card=document.createElement("div")
        Card.append(firstname,lastname,email,img)
        ul.append(Card)
    })
    
    
}).catch(err=>console.log(err)) *///final result


//async await (syntactical sugar for handling promises)

/* try{} catch(){} */
//async function always returns you a promise
async function FetchData(){
    try{ 
        let response = await fetch("https://reqres.in/api/users?page=2")
        let result = await response.json()
    
        let ul=document.querySelector("ul")
        result.data.map(user=>{
            let firstname=document.createElement("h1")
            firstname.innerHTML=user.first_name
    
            let lastname=document.createElement("div")
            lastname.innerHTML=user.last_name
            let email=document.createElement("div")
            email.innerHTML=user.email
            let img=document.createElement("img")
            img.src=user.avatar
            let Card=document.createElement("div")
            Card.append(firstname,lastname,email,img)
            ul.append(Card)
        })
    } catch(err){console.log(err)}
}

/* FetchData() */
