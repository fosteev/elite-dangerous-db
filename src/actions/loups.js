import {request} from './request';


export function loupsResponse(data) {
    return {
        type: 'LOUPS_RESPONSE',
        loups: data
    }
}


export  function fetchLoups() {
    return dispatch  => {
        dispatch(request('route/search/loops', {}, json => {
            dispatch(loupsResponse(json));
        }))
    }
}






