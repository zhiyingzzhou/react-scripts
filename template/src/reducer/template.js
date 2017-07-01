import Types from 'constants';

const {TEMPLATE_ACTION} = Types;

const initialState = {};

export default function template(state=initialState,action) {
    switch(action.type) {
        case TEMPLATE_ACTION:
            return {...state};
        default:
            return {...state};
    }
}