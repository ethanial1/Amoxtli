import { helpHttp } from "../../helpers/helpHttp";
import { URL_GET_READ_LAST } from "../../helpers/urls";

export const GET_READ_LAST = "GET_READ_LAST";

export const getReadLast = () => dispatch => {
    return (
        helpHttp().get(`${URL_GET_READ_LAST}/1`)
        .then(res => dispatch({type: GET_READ_LAST, payload: res}))
        .catch(err => console.log(err))
    )
}
