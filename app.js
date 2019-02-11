const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const pg = require('./config/ps_connection')
require('./config/config')
//***************cors*****************
var op = {
  origin: true,
  methods: ['POST', 'GET'],
  credentials: true,
  maxAge: 3600
}
var cors = require('cors')
//***************cors*****************

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

//**************Llamada de archivos en rutas*******************
var alumnosRouter = require('./routes/alumnos-routes');


//**************Ruta principal de archivo***************
app.use('/api/alumnos', cors(op), alumnosRouter);



app.listen(process.env.PORT, () => {
  console.log("Api Puxbit is up");
})