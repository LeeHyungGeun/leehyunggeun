import axios from 'axios';

function sendMessage(email: string, body: string) {
    // return Promise.resolve(new Promise(resolve => setTimeout(resolve, 300)))
    // .then(() => {
    //     return {
    //         code: '00',
    //         message: 'Hello'
    //     };
    // });
    return axios({
        method: 'POST',
        url: `/api/sendMessage`,
        data: {
            email,
            body
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return false;
    });
}

export default sendMessage;