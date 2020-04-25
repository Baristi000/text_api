
var express = require('express'),
app = express(),
port = process.env.PORT || 5000;
/*
//app.use(express.static('index_1'));
app.set('index_1', './index_1'); // Thư mục views nằm cùng cấp với file index.js
app.get('/', function(req,res){
  res.sendFile('./index_1/index_1.html',{ root: __dirname });
  //res.sendFile(path.join(__dirname + '/index_1/index_1.html'));
  //res.sendFile('index_1.html');
  res.render('./index_1.html');
});
///*/
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.urlencoded({ extended:false}));

//app.set("view engine","ejs");
const path = require("path");
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Để sử dụng file tĩnh css
app.use(express.static('index_1'));

//routers
//app.use('/',pageRouter);


//render
app.get("/",function(req,res)
{
  res.render(path.join(__dirname,"/index_1/index_1.html"))
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);