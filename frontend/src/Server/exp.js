const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;


app.use(cors());
app.use(bodyParser.json());

const auth = require('./auth');
app.use('/',auth);

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
}); 


