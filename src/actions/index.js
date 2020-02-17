import jsonCountries from '../apis/jsonCountries';
import { 
    EMAIL_INPUT_CHANGED, 
    SSN_INPUT_CHANGED, 
    PHONE_INPUT_CHANGED, 
    COUNTRY_INPUT_CHANGED, 
    INVALID_EMAIL, 
    INVALID_PHONE_NUMBER, 
    INVALID_SSN, 
    INVALID_COUNTRY_SELECTION, 
    FETCH_COUNTRIES } from './types';

export const onEmailInputChange = (text) => {
    return {
        type: EMAIL_INPUT_CHANGED,
        payload: text
    };
};

export const onSSNChange = (numbers) => {
    return {
        type: SSN_INPUT_CHANGED,
        payload: numbers
    };
};

export const onPhoneNumberChange = (numbers) => {
    return {
        type: PHONE_INPUT_CHANGED,
        payload: numbers
    };
};

export const onCountrySelect = (country) => {
    return {
        type: COUNTRY_INPUT_CHANGED,
        payload: country
    }
}

export const setEmailError = (errorText) => {
    return {
        type: INVALID_EMAIL,
        payload: errorText

    };
};

export const setPhoneError = (errorText) => {
    return {
        type: INVALID_PHONE_NUMBER,
        payload: errorText

    };
};

export const setSSNError = (errorText) => {
    return {
        type: INVALID_SSN,
        payload: errorText

    };
};

export const setCountryError = (errorText) => {
    return {
        type: INVALID_COUNTRY_SELECTION,
        payload: errorText,
    }
}

export const fetchCountries = () => async dispatch =>  {
    const response = await jsonCountries.get('/all');
    dispatch({type: FETCH_COUNTRIES, payload:response})
};



