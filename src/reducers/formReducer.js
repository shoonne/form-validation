
import { 
    EMAIL_INPUT_CHANGED, 
    SSN_INPUT_CHANGED, 
    PHONE_INPUT_CHANGED, 
    COUNTRY_INPUT_CHANGED, 
    INVALID_EMAIL, 
    INVALID_PHONE_NUMBER, 
    INVALID_SSN, 
    INVALID_COUNTRY_SELECTION, 
    } from '../actions/types';


const initialState = { 
    email: '',
    socialSecurityNumber: null,
    phoneNumber: null,
    country: '',
    error: {
        email: '',
        securityNumber:'',
        phone:'',
        country: ''
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_INPUT_CHANGED:
            return {...state, email: action.payload};

        case SSN_INPUT_CHANGED:
            return {...state, socialSecurityNumber: action.payload};
        
        case PHONE_INPUT_CHANGED:
            return {...state, phoneNumber: action.payload};
        
        case COUNTRY_INPUT_CHANGED: 
            return {...state, country: action.payload};

        case INVALID_EMAIL: 
            return {...state, error: {
                ...state.error,
                email: action.payload
            }};

        case INVALID_PHONE_NUMBER: 
            return {...state, error: {
                ...state.error,
                phone: action.payload
            }};

        case INVALID_SSN: 
            return {...state, error: {
                ...state.error,
                securityNumber: action.payload
            }};
        
        case INVALID_COUNTRY_SELECTION: 
            return {...state, error: {
                ...state.error,
                country: action.payload
            }}
        default:
            return state;
    }

};