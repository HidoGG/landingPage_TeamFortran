const express = require('express');
const proyectosRoute = require('./routes/proyectosRoute'); 
app = express();

//Usamos este app.use para poder darle al servidor 
//arcchivos estaticos como imagenes
app.use(express.static('img'));


//Ruta principal de nuestro servidor
app.get('/', (req, res) => {
    res.send('Bienvenidos a nuestro portafolio')
})

//Configuramos una ruta para poder utilizar proyectosRoute
app.use('/projecectos', proyectosRoute);

//Inicializamos el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('El servidor inicio en el puerto 3000')
})