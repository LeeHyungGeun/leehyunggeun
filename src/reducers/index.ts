import { combineReducers } from 'redux';
import header from './headerReducer';
import resume from './resumeReducer';
import contact from './contactReducer';

const rootReducer = combineReducers({
    header,
    resume,
    contact,
});

export default rootReducer;