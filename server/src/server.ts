import * as express from 'express';
const app = express();
const PORT = 8080;
import * as bodyParser from 'body-parser';
import contact from './apis/contact';
import * as fs from 'fs';
// import * as path from 'path';
import * as _ from 'lodash';
import Message from './models/Message';
import {
    // IpFilter as ipfilter
} from 'express-ipfilter';
import acl from './configs/acl';

// app.use(`/admin`, ipfilter(acl.admin, {mode: 'allow'}));
app.use(express.static('./build'));
app.use(bodyParser.json());

app.post(`/api/sendMessage`, async (req, res) => {
    const {
        email,
        body
    } = req.body;
    const result = await contact.addContact({
        email, 
        body
    });
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

app.get(`/api/getMessages`, async (req, res) => {
    const remoteAddress = req.connection.remoteAddress;
    if (!_.includes(acl.getMessages, remoteAddress)) {
        res.json({
            code: '99',
            message: 'Invalid IP address'
        });
    }
    const messages: Array<Message> = await contact.getMessages() as Array<Message>;
    res.json({
        code: '00',
        message: 'success',
        data: messages
    });
});

app.get('*', (req, res) => {
    console.log(req.connection.remoteAddress);
    const url = './build/index.html';
    fs.readFile(url, 'utf8', (err, data) => {
        res.send(data);
    });
});

app.listen(PORT);