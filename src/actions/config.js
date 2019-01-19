export const url = 'https://eddb.io/';

export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE', REQUEST = 'REQUEST', RESPONSE = 'RESPONSE',
    SHOW_FAIL_RESPONSE_FROM_SERVER = 'SHOW_FAIL_RESPONSE_FROM_SERVER',
    HIDE_FAIL_RESPONSE_FROM_SERVER = 'HIDE_FAIL_RESPONSE_FROM_SERVER';


export function loginFail() {
    return {
        type: 'LOGIN_USER_FAILURE',
    }
}

export function onSpinner() {
    return {
        type: 'REQUEST'
    }
}

export function offSpinner() {
    return {
        type: 'RESPONSE'
    }
}

export function onShowFailResponseFromServer(text) {
    return {
        type: 'SHOW_FAIL_RESPONSE_FROM_SERVER',
        text: text
    }

}

export function onHideFailResponseFromServer() {
    return {
        type: 'HIDE_FAIL_RESPONSE_FROM_SERVER'
    }
}

export function fetchRequest(dispatch, url, success) {
    dispatch(onSpinner());
    fetch(url, {
        //credentials: 'include'
    }).then((response) => {
        console.log(response)
        // switch (response.status) {
        //     case 404:
        //     case 409:
        //     case 500:
        //         return dispatch(onShowFailResponseFromServer(response.text()));
        //     default:
        //         dispatch(onHideFailResponseFromServer());
        // }
        dispatch(offSpinner());

        response.json().then(json => {
            success(json)
        }).catch(() => success());
    })
        .catch((error) => {
            console.log('fetch catch error: ', error);
            return dispatch(onShowFailResponseFromServer());
        });
}
