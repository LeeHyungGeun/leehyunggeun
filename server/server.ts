import * as express from 'express';
const app = express();
const PORT = 9999;
import * as bodyParser from 'body-parser';
import contact from './apis/contact';

app.use(express.static('../build'));
app.use(bodyParser.json());

app.get('/api/getServices', (req, res) => {
    res.json([
        {
            name: 'Home'
        },
        {
            name: 'Contact'
        },
        {
            name: 'Calendar'
        },
        {
            name: 'Message'
        },
    ]);
});

app.post(`/api/sendMessage`, async (req, res) => {
    const {
        email,
        body
    } = req.body;
    const result = await contact.addContact(email, body);
    if (result) {
        res.json({
            code: '00',
            message: 'SUCCESS'
        });
    } else {
        res.json({
            code: '99',
            message: 'FAIL'
        });
    }
});
// app.get('/*', (req, res) => {
//     res.send('Hello World22jladsfkljk3jk');
// });

app.listen(PORT);