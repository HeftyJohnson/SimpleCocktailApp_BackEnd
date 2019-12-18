const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
var bodyParser = require('body-parser')

app.get('/',(req,res)=>{
res.send('HELLO')
})

app.use(bodyParser.json());

app.get('/getCocktail',(req, res) => {
    let spirit = req.body.spirit
    console.log(spirit)
    axios.get('https://the-cocktail-db.p.rapidapi.com/filter.php', { 
            params: {
            i: spirit
        },
        headers: {
            'X-RapidAPI-Key': '10f9f92b44msh80c2e441df74824p13fe53jsnc155941ba5c9'}
})
    .then((response)=>{

        console.log(response)
         res.send(response.data)
    })
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))