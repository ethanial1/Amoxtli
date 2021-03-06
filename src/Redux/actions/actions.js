import { helpHttp } from "../../helpers/helpHttp";
import { URL_DELETE_BOOK_SAVED, URL_DELETE_LECTURA, URL_GET_READ_LAST, URL_SAVE_BOOK_FOR_LATER } from "../../helpers/urls";

export const GET_READ_LAST = "GET_READ_LAST";
export const SAVE_NEW_BOOK = "SAVE_NEW_BOOK";
export const ADD_NEW_LECTURE = "ADD_NEW_LECTURE";
export const SET_BOOK_GEN = "SEN_BOOK_GEN";
export const DELEVE_BOOK_SAVED = "DELETE_BOOK_SAVED";
export const DELETE_LECTURA = "DELETE_LECTURA";
export const ADD_ID = "ADD_ID";

export const addNewLecture = (book, userId ) => dispatch => {
    return (
        helpHttp().post("https://amoxtliapi.herokuapp.com/ingress/books/addbook", {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                userid: userId, 
                bookId: book.idbook
            }
        })
        .then(res => dispatch(getReadLast(userId)))
        .then(res => dispatch(
            {
                type: SAVE_NEW_BOOK,
                payload: {
                    id: book.idbook,
                    titulo: book.titulo,
                    numpag: book.numpags,
                    currentpage: 1,
                    img: book.img,
                    color: book.color
                }
            }
        ))
    )
}


export const getReadLast = id => dispatch => {
    return (
        helpHttp().get(`${URL_GET_READ_LAST}/${id}`)
        .then(res => dispatch({type: GET_READ_LAST, payload: res}))
        .catch(err => console.log(err))
    )
}

export const setBookGen = genero => {
    return {
        type: SET_BOOK_GEN,
        payload: genero
    }
}


export const saveNewBook = (book, id ) => dispatch => {
    return (
        helpHttp().post(URL_SAVE_BOOK_FOR_LATER, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                userid: id, 
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

export const deleteBookSaved = ( bookId, id ) => dispatch => {
    return (
        helpHttp().delet(URL_DELETE_BOOK_SAVED,{
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                userid: id, 
                bookId: bookId
            }
        })
        .then(res => dispatch({
            type: DELEVE_BOOK_SAVED
        }))
    )
}

export const deleteLectura = (idBook, iduser) => dispatch => {
    return (
        helpHttp().delet(URL_DELETE_LECTURA, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                idbook: idBook,
                iduser: iduser
            }
        }).then(res => dispatch({
            type: DELETE_LECTURA,
            payload: idBook
        }))
    )
}

export const authId = key => dispatch => {

    return (
        helpHttp().post("https://amoxtliapi.herokuapp.com/ingress/users/save", {
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                userauth: key
            }
        })
        .then(res => dispatch({
            type: ADD_ID,
            payload: res.data.iduser
        }))
        .catch(err => console.log(err))
    )
}