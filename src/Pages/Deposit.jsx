import { useContext, useEffect } from "react";

import BankContext from "../Context/BankContext";

const Deposit = () => {
    const { state, loadData } = useContext(BankContext);

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        console.log("state")
        console.log(state)
    }, [state])

    return <div>Deposit</div>;
};

export default Deposit;
