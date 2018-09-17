import Actions from './constants/actions';

const posts = (state = [], action) => {
    switch (action.type){
        case Actions.GET_POSTS :
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
}

export default posts;