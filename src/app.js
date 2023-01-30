const express = require('express')

const app = express()

//? Habilita el recibir data en formato JSON
app.use(express.json())

//? HOST: localhost:9000/
app.get('/', (req, res) => { 
    res.status(200).json({
        message: 'Server Ok!'
    })
})



app.listen(9000, () => {
    console.log('Server started at: http://localhost:9000')
})
