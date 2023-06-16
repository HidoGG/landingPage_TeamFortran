const express = require('express');
const router = express.Router();


//Aqui agregaremos proyectos y podran ser mostrados
router.get('/', (req, res) => {
    const proyectos = [{}];

    res.render('proyectos' , {proyectos: proyectos});
})

//Exportamos la ruta para usar en app.js
module.exports = router;