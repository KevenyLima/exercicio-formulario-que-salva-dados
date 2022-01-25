const readline = require('readline')
const fs = require('fs')
const arquivo = fs.createReadStream('../content.txt')

function load(){
    const contentChange = fs.readFileSync(contentFilePath, 'utf-8')
    return contentChange
}
const rl = readline.createInterface({
    input: arquivo
})

rl.on('line',(line)=>{
    console.log(">>>>",line)
})