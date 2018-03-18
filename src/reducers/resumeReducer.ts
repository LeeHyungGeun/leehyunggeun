import * as types from '../actions/actionTypes';
import {
    resume
} from '../state';
function resumeReducer(state: any = resume, action: any) {
    switch (action.type) {
        case types.GET_RESUME: {
            return getResume(state, action);
        }
        default:
            return state;
    }
}

function getResume(state: any, action: any) {
    return state;
}

export default resumeReducer;