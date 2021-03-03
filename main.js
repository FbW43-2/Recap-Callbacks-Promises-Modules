//module
//simple js file
//key directives (import and export)
//2 types of export/import
//1. named export and 2.default export
//webpack (file bundler)

import randomMathFunc from "./Math.js" //default import
import randomMathOperation from "./opertaion.js"//default import
import {ul as listItems} from "./DOMmanipulation.js"//named import


randomMathFunc()
listItems.addEventListener("click",()=>console.log("do something"))
console.log(listItems)
listItems.style.backgroundColor="blue"