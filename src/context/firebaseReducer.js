const ADD_NOTE = 'ADD_NOTE';
const FETCH_NOTE = 'FETCH_NOTE';

const handlers = {
    [ADD_NOTE]: (state, {payload}) =>({
        ...state,
        todoDate: [...state.todoDate, payload]
    }),
    [FETCH_NOTE]: (state, {payload})=>({
        ...state,
        todoDate: [payload]
    }),
    DEFAULT: state => state
};
export const firebaseReducer = (state, action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}