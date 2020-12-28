const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);


router.post('/data',(req,res) => {
    req.body.name = "khaled";
    res.send(req.body);
});


router.get('/greeting/:name',(req,res) => {
    res.send('hello '+req.params['name']);
    
});
app.use( router);
app.listen(8000, () =>
  console.log('app listening on port 8000')
)


