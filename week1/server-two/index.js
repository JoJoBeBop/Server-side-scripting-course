const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

/*
app.get('/', (req, res) => res.send('Hello World!'))
*/

app.set('view engine', 'pug')



app.get('/catinfo', (req, res) => {
  const cat = {
    'name': 'Frank',
    'age': 6,
    'weight': 5,
  };
  res.json(cat);
});

app.get("/", function (req, res){
  res.render("index", {title: "Hello!", name: "Frank", age: "6", weight: "5", msg: "Click the cat", srcLink: "./img/cat.jpg", classN: "big small trans"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))