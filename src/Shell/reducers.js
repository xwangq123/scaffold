import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

const uiReducer = (state = Immutable.Map(), action) => {
    switch (action.type) {
        default:
            break;
    }
    return state;
};

const initialData = {
    reserveCount: 0,
    retentionsReasonCount: 0,
    outTimeCounts: 0,
    inTimeCounts: 0
};
const dataReducer = (state = Immutable.fromJS(initialData), action) => {
    switch (action.type) {
        case 'SHELL/IO/INITIAL_DATA':
        case 'SHELL/IO/IN_OUT_DATA':
            action.payload.forEach((item, key) => {
                if (state.get(item.fieldName) >= 0 && state.get(item.fieldName) !== item.fieldValue)
                    state = state.set(item.fieldName, item.fieldValue);
            });
            break;
        default:
            break;
    }

    return state;
};

export default combineReducers({
    ui: uiReducer,
    data: dataReducer
});
