import mongojs, { 
    // ObjectId 
} from 'mongojs';
const DB_URL = 'leehyunggeun';
const COLLECTION_NAME = ['contact'];
const db = mongojs(DB_URL, COLLECTION_NAME);
import Message from '../models/Message';

function addContact(message: Message) {
    message.regDate = (new Date()).getTime();
    return new Promise((resolve, reject) => {
        db.contact.save(message, (err, doc) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}
function getMessages() {
    return new Promise((resolve, reject) => {
        db.contact.find({}, (err, doc) => {
            if (err) {
                reject(err);
            } else {
                resolve(doc);
            }
        });
    });
}

export default {
    addContact,
    getMessages
};