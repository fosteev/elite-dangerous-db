import {url, fetchRequest} from './config';

export const ADD_PARAMS_REQUEST = 'ADD_PARAMS_REQUEST', RESET_PARAMS_REQUEST = 'RESET_PARAMS_REQUEST',
    JSON_CONFIG_CHANGE = 'JSON_CONFIG_CHANGE', RESPONSE_REQUEST = 'RESPONSE_REQUEST',
    SUCCESS_RESPONSE = 'SUCCESS_RESPONSE', SUCCESS_RESPONSE_RESET = 'SUCCESS_RESPONSE_RESET';

export function addParams(params) {
    return {
        type: ADD_PARAMS_REQUEST,
        params: params
    }
}

export function resetParams(params) {
    return {
        type: RESET_PARAMS_REQUEST,
        params: params
    }
}

export function setResponseText(text) {
    return {
        type: RESPONSE_REQUEST,
        text: text
    }
}

export function json_config_change(json) {
    console.log(json);
    return {
        type: JSON_CONFIG_CHANGE,
        json: json
    }
}

export function successResponse() {
    return {
        type: 'SHOW_SNACKBAR'
    }
}

export function successResponseReset() {
    return {
        type: 'HIDE_SNCACKBAR'
    }
}


export function request(route, params, success) {
    return dispatch => {
        dispatch(successResponseReset());
        fetchRequest(
            dispatch,
            `${url}${route}${parseParamsToUrl(params)}`,
            (json) => success(json));
    }
}

export function parseParamsToUrl(params) {
    let url = ``;
    for (var key in params) {
        if (key !== 'url') {
            const value = params[key];
            url += `&${key}=${value || value === 0 ? params[key] : ''}`
        }
    }
    return url;
}
