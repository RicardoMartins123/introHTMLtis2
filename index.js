const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'))
 
app.get('/', function (req, response) {
  response.sendFile(path.join(_disname, '/piublic/index.html'))
})

 
app.listen(3000)