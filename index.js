//synchronous and asynchronous code
//blocking and non-blocking


console.log("start")

function getName(rollnumber){
    setTimeout(()=>{
       setTimeout(()=>{
           //send rollnumber to server and against that rollnumber ,get student name from server
           let name = "Mike"
           console.log(name)
       },2000)
    },0) 
    


}

getName(102)


console.log("end")

