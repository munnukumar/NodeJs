//Using Express
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req, res, next) =>{
    res.send(
        '<body><form action="/product" method="POST">Title<input type="text" name="title"><br>Size<input type="number" name="size"><br><button type="submit">AddProduct</button></form></body>')
})

app.use('/product',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req, res, next) =>{
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(PORT, ()=>{
    console.log(`server is listning on PORT: ${PORT}`)
})
