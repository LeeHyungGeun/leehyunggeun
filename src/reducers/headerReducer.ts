import * as types from '../actions/actionTypes';
import {
    fromJS
} from 'immutable';
import {
    header
} from '../state';
function headerReducer(state: any = header, action: any) {
    switch (action.type) {
        case types.CHANGE_MENU: {
            return changeMenu(state, action);
        }
        default:
            return state;
    }
}

function changeMenu(state: any, action: any) {
    const {
        menu
    } = action;
    return fromJS(state)
        .setIn(['menu'], menu)
        .toJS();
}

export default headerReducer;