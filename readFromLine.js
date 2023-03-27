
const readline=require("readline")

let readLine=readline.createInterface(process.stdin,process.stdout)
readLine.question("please enter your name-",(Name)=>{
    console.log("hello",Name)
    readLine.close();
})