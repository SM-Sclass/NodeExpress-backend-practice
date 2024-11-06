const express =  require('express');
const path = require('path');
const app = express();
const port = 3000;
const itemRouter = require('./routes/item');
const rolevalidator = require('./routes/role');

app.use(rolevalidator);
app.use(express.json());

app.use('/items', itemRouter);
app.use("/campus",rolevalidator);
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, './dummy.html');
    res.sendFile(filePath);
});

app.post('/about', (req, res) => {
    console.log(req.body)
    res.send('This is the about page');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});