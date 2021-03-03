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

console.log("start")

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

console.log("end") 
