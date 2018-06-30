import { Auth, Logger } from 'aws-amplify';
import ReactGA from 'react-ga';

export async function getCurrentUser(dispatch) {
    const user = await Auth.currentUserInfo();
    dispatch({
        type: 'USER_DATA_RECEIVED',
        payload: {
            ...user,
            state: user ? 'signed_in' : 'signed_out'
        }
    });
    if (user) {
        ReactGA.set({
            userId: user.id,
            username: user.username 
        });
    }
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
    getCurrentUser(dispatch);
}