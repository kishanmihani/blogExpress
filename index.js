const {SSL_OP_TLS_BLOCK_PADDING_BUG} = require('constants');
const express= require('express');
const { engine } = require('express-handlebars');
const path= require('path');
const app= express();
const PORT= process.env.PORT || 3000;


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static(path.join(__dirname,
    'static'
)))
app.use('/',require(path.join(__dirname,'routes/blog.js')))
app.listen(PORT,()=>{
    console.log(`Blog app listening at http://localhost:${PORT}`);
})