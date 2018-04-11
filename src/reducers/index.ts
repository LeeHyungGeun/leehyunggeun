import { combineReducers } from 'redux';
import header from './headerReducer';
import resume from './resumeReducer';
import contact from './contactReducer';
import iauditor from './iauditorReducer';

const rootReducer = combineReducers({
    header,
    resume,
    contact,
    iauditor,
});

export default rootReducer;