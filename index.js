const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


const categories = require('./data/Categories.json');
const news = require('./data/news.json');

app.use(cors());
app.get('/',(req,res)=>{
res.send('categories data loading')
});

app.get('/news-categories', (req,res)=>{
    res.send(categories);
});

app.get('/news',(req,res)=>{
    res.send(news);
})

app.get('/news/:id',(req,res)=>{
    // res.send(news);
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews);
    console.log(req.originalUrl);
})
app.get('/category/:id',(req,res)=>{
    const id = req.params.id;
  if(id==='08'){
    res.send(news)
  }
  else{
    const selectedCategory = news.filter(n=>n.category_id=== id);
    res.send(selectedCategory);
  }
 
})
app.listen(port, ()=>{
    console.log('News valt app port number',port)
})