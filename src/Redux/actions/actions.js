import { helpHttp } from "../../helpers/helpHttp";
import { URL_DELETE_BOOK_SAVED, URL_GET_READ_LAST, URL_SAVE_BOOK_FOR_LATER } from "../../helpers/urls";

export const GET_READ_LAST = "GET_READ_LAST";
export const SAVE_NEW_BOOK = "SAVE_NEW_BOOK";
export const DELEVE_BOOK_SAVED = "DELETE_BOOK_SAVED";

export const getReadLast = () => dispatch => {
    return (
        helpHttp().get(`${URL_GET_READ_LAST}/1`)
        .then(res => dispatch({type: GET_READ_LAST, payload: res}))
        .catch(err => console.log(err))
    )
}


export const saveNewBook = book => dispatch => {
    return (
        helpHttp().post(URL_SAVE_BOOK_FOR_LATER, {
            headers:{'Content-Type': 'application/json'},
            body: {
                userid: 1, 
                bookId: book.idbook
            }
        })
        .then(res => dispatch(
                {
                    type: SAVE_NEW_BOOK,
                    payload: res.ok
                }
            )
        ).catch(e => console.log(e))
    )
}

export const deleteBookSaved = bookId => dispatch => {
    return (
        helpHttp().delet(URL_DELETE_BOOK_SAVED,{
            headers:{'Content-Type': 'application/json'},
            body: {
                userid: 1, 
                bookId: bookId
            }
        })
        .then(res => dispatch({
            type: DELEVE_BOOK_SAVED
        }))
    )
}