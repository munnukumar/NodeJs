//Using Express
const express = require('express');
const PORT = 3000;

const app = express();

app.use((req, res, next) =>{
    console.log("In the middeleware!")
    next();
})

app.use((req, res, next) =>{
    console.log("In another middeleware!");
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(PORT, ()=>{
    console.log(`server is listning on PORT: ${PORT}`)
});
