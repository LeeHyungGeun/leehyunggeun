import { combineReducers } from 'redux';
import header from './headerReducer';
import resume from './resumeReducer';

const rootReducer = combineReducers({
    header,
    resume
});

export default rootReducer;