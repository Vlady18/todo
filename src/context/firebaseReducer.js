export const ADD_NOTE = 'ADD_NOTE';
export const FETCH_NOTE = 'FETCH_NOTE';
export const SHOW_LOADER = 'SHOW_LOADER';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const handlers = {
    [ADD_NOTE]: (state, {payload}) =>({
        ...state,
        todoDate: [...state.todoDate, payload]
    }),
    [FETCH_NOTE]: (state, {payload})=>({
        ...state,
        todoDate: payload
    }),
    [REMOVE_NOTE]: ({state, payload}) =>({
        ...state,
        todoDate: {...state.todoDate.filter((el)=> el.id !== payload)}
    }),
    [SHOW_LOADER]: ({state}) =>({
        ...state,
        loader: true
    }),
    DEFAULT: state => state
};
export const firebaseReducer = (state, action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}