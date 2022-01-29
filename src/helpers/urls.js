const BASE_URL = 'https://amoxtliapi.herokuapp.com/ingress';
export const URL_GET_ALL_BOOKS = BASE_URL + "/books/";
export const URL_GET_READ_LAST = URL_GET_ALL_BOOKS + "recientes";
export const URL_GET_NEW_REALEASE = BASE_URL + "/books/months/books";
export const URL_SAVE_BOOK_FOR_LATER = URL_GET_ALL_BOOKS + "addbookforlater";
export const URL_DELETE_BOOK_SAVED = URL_GET_ALL_BOOKS + "delete";
export const URL_GENEROS = URL_GET_ALL_BOOKS + "genero"
export const URL_DELETE_LECTURA = URL_GET_ALL_BOOKS + "lectura";