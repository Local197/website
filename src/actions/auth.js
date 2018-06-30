import { Auth, Logger } from 'aws-amplify';

export async function getCurrentUser(dispatch) {
    const user = await Auth.currentUserInfo();
    console.log(user)
    console.log(dispatch)
    dispatch({
        type: 'USER_DATA_RECEIVED',
        payload: {
            ...user,
            state: user ? 'signed_in' : 'signed_out'
        }
    });
}

export async function signIn(username, password, dispatch) {
    try {
        await Auth.signIn(username, password);
    } catch (e) {
        dispatch({
            type: 'SIGN_IN_ERROR',
            payload: {...e}
        })
    }
    getCurrentUser(dispatch);
}

export async function signOut(dispatch) {
    await Auth.signOut();
    dispatch(getCurrentUser(dispatch));
}