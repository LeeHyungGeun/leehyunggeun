import mongojs, { 
    // ObjectId 
} from 'mongojs';
const DB_URL = 'leehyunggeun';
const COLLECTION_NAME = ['contact'];
const db = mongojs(DB_URL, COLLECTION_NAME);

function addContact(email = '', body = '', regDate = (new Date()).getTime()) {
    return new Promise((resolve, reject) => {
        db.contact.save({
            email,
            body,
            regDate
        }, (err, doc) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

export default {
    addContact
}