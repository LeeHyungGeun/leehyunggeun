import * as types from './actionTypes';
import api from '../services/apis';
// import createBrowserHistory from 'history/createBrowserHistory';
// const customHistory = createBrowserHistory();

function changeEmail(email: string) {
    return {
        type: types.CHANGE_EMAIL,
        email
    };
}
function changeBody(body: string) {
    return {
        type: types.CHANGE_BODY,
        body
    };
}
function sendMessage(email: string, body: string, history: any) {
    return async (dispatch: any) => {
        const result: any = await api.sendMessage(email, body);
        if (result && result.code === '00') {
            history.push('/Contact/ThankYou');
            dispatch(initContact());
        } else {
            alert(result.message || 'Error');
        }
    };
}
function initContact() {
    return {
        type: types.INIT_CONTACT
    };
}

export {
    changeEmail,
    changeBody,
    sendMessage,
    initContact
};