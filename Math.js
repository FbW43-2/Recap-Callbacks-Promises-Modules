//in each module you can have single default export

export function sum(a,b){
    console.log(a+b)
} //named export

export function substract(a,b){
    console.log(b-a)
}//named export

export default function createRandomNumber(){
    console.log(Math.random())
} //default export


/* export {sum,substract,createRandomNumber as default} */