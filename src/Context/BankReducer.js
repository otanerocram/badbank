import { SIGNIN, USER_LOGGED, UPDATE_BALANCE, UPDATE_DATA, LOG_OPERATION } from "./actions";

export default (state, action) => {
    const { payload, type } = action;

    const today = new Date();
    const mydate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

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
                actualBalance: payload
            };
        case UPDATE_DATA:
            return {
                ...state,
                data: payload,
            };
        case LOG_OPERATION:
            return {
                ...state,
                movements: [...state.movements, { date: mydate, operation: payload.operation, amount: payload.amount }],
            };
        default:
            break;
    }
};
