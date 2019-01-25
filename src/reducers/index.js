import {combineReducers} from 'redux';

import state from './state';
import loups from './loups';
import theme from './theme';

export default combineReducers({
    state,
    loups,
    theme
});
