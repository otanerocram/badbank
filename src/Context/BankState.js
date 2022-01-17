import { useReducer } from "react";
import UserController from "../Controllers/UserController";

import BankContext from "./BankContext";
import BankReducer from "./BankReducer";

const BankState = (props) => {
    const initialState = {
        isLogged: false,
        userName: "",
        actualBalance: 0,
        data: []
    };

    const [state, dispatch] = useReducer(BankReducer, initialState);

    const signin = () => {
        setTimeout(
            dispatch({
                type: "SIGNIN",
                payload: true,
            }),
            200
        );
    };

    const loadData = () => {
        UserController.getUsers()
            .then((e) => {
                console.log(e.record.users);
                dispatch({
                    type: "UPDATE_DATA",
                    payload: e.record.users
                })
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return <BankContext.Provider value={{signin, loadData, state, dispatch}}>{props.children}</BankContext.Provider>;
};

export default BankState;
