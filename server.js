const express = require('express');
const cors = require('cors');
const personRoute = require('./routes/personRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.listen(port, () => {
    console.log('Server is runnig on port: ' + port);
});

app.use('/persons', personRoute);