import { createStore } from 'redux';

const initialState = {
    products: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
