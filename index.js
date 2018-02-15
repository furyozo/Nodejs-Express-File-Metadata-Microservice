const express = require('express')
var multer  = require('multer')
var upload = multer()

const app = express()

app.use(express.static('public'))

var type = upload.single('file');
app.post('/upload', type, function (req, res) {
  res.send({size: req.file.size})
})

app.listen(3000, () => console.log("App listening on port 3000"))
