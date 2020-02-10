export const ADD_NOTE = 'ADD_NOTE';
export const FETCH_NOTE = 'FETCH_NOTE';
export const SHOW_LOADER = 'SHOW_LOADER';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const PROPERTY_NOTE = 'PROPERTY_NOTE';

const handlers = {
    [ADD_NOTE]: (state, {payload}) =>({
        ...state,
        todoDate: [...state.todoDate, payload],
        loading: false
    }),
    [FETCH_NOTE]: (state, {payload})=>({
        ...state,
        todoDate: payload,
        loading: false
    }),
    [REMOVE_NOTE]: (state, {payload}) =>({
        ...state,
        todoDate: state.todoDate.filter(el=> el.key !== payload)
    }),
    [PROPERTY_NOTE]: (state, {payload}) => ({
      ...state,
        todoDate: payload
    }),
        // todoDate: state.todoDate.filter(el=> el.key === payload)
    [SHOW_LOADER]: (state) =>({
        ...state,
        loading: true
    }),
    DEFAULT: state => state
};
export const firebaseReducer = (state, action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}