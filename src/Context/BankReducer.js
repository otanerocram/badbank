import { SIGNIN, USER_LOGGED, UPDATE_BALANCE, UPDATE_DATA } from "./actions";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case SIGNIN:
            return {
                ...state,
                isLogged: payload,
            };
        case USER_LOGGED:
            return {
                ...state,
                userName: payload,
            };

        case UPDATE_BALANCE:
            return {
                ...state,
                actualBalance: payload,
            };
        case UPDATE_DATA:
            return {
                ...state,
                data: payload,
            };
        default:
            break;
    }
};
