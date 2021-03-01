import { API_BASE_URL } from '../constants';
import { dispatch } from './config';

export const api = {
    // example
    getUsers() {
        return dispatch({
            url: `${API_BASE_URL}/users`
        })
    }
}