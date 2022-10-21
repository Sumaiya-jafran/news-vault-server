const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


const categories = require('./data/Categories.json')

app.use(cors());
app.get('/',(req,res)=>{
res.send('categories data loading')
});

app.get('/news-categories', (req,res)=>{
    res.send(categories);
});

app.listen(port, ()=>{
    console.log('News valt app port number',port)
})