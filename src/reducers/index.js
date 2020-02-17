
import {combineReducers} from 'redux';
import formReducer from './formReducer';
import countryReducer from './countryReducer';

export default combineReducers({
    userInput: formReducer,
    countryData: countryReducer
});