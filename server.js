const express = require('express');
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req,res)=> {
    res.send('<h1>hello</h1>')
})


app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});