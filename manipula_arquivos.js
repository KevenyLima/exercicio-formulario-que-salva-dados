const fs = require('fs');
const contentFilePath = './content.json'

//guardando dados
function save(content){
    const contentString = JSON.stringify(content)
    return fs.writeFileSync(contentFilePath,contentString) 
}
//carregando dados
function load(){
    const filebuffer =fs.readFileSync(contentFilePath, 'utf-8')
    const contentJson = JSON.parse(filebuffer)
    return contentJson
}

module.exports={
    save,
    load
}