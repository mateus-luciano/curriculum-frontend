const initialState = [];

export default function comments(state = initialState, { type, payload }) {
    switch(type) {
        case 'comment/ADD':
            return [...state, payload];
        default:
            return state;
    }
};