import * as types from '../actions/actionTypes';
import {
    contact
 } from '../state';
import MContact from '../Models/Contact';
import {
    fromJS
} from 'immutable';

function contactReducer(state: MContact = contact, action: any) {
    switch (action.type) {
        case types.INIT_CONTACT: {
            return initContact(state, action);
        }
        case types.CHANGE_EMAIL: {
            return changeEmail(state, action);
        }
        case types.CHANGE_BODY: {
            return changeBody(state, action);
        }
        default: {
            return state;
        }
    }
}
function initContact(state: MContact, action: any) {
    return contact;
}
function changeEmail(state: MContact, action: any) {
    return fromJS(state)
        .setIn(['email'], action.email)
        .toJS();
}
function changeBody(state: MContact, action: any) {
    return fromJS(state)
        .setIn(['body'], action.body)
        .toJS();
}

export default contactReducer;