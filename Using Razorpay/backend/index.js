const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/orders', (req, res)=>{
    const razorpay = new Razorpay({
        
    })
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});