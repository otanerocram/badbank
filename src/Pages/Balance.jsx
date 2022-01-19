import { useState, useContext, useEffect } from "react";
import BankContext from "../Context/BankContext";

const Balance = () => {
    const { state, dispatch } = useContext(BankContext);

    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [myBalance, setMyBalance] = useState(0);
    const [totalDeposits, setTotalDeposits] = useState(0);
    const [totalWithdraws, setTotalWithdraws] = useState(0);

    var today = new Date();
    const mydate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    useEffect(() => {
        console.log(state);
        setMyBalance(state.actualBalance);
        setTotalDeposits(state.movements.filter((e) => e.operation === "deposit").length);
        setTotalWithdraws(state.movements.filter((e) => e.operation === "withdraw").length);
        setClientName(state.userName);
        setClientEmail(state.userEmail);
    }, [state]);

    const handleWa = () => {
        dispatch({
            type: "LOG_OPERATION",
            payload: { date: mydate, operation: "deposit", amount: 500 },
        });
    };
    return (
        <div aria-label="cards" className="bg-white dark:bg-gray-800 shadow rounded">
            <div className="relative">
                <img
                    tabIndex="0"
                    className="focus:outline-none h-56 shadow rounded-t w-full object-cover object-center"
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
                    alt="mountains cover"
                />
                <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                    <img
                        tabIndex="0"
                        className="focus:outline-none w-full h-full overflow-hidden object-cover rounded"
                        src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                        alt="person"
                    />
                </div>
            </div>
            <div className="px-5 xl:px-10 pb-10">
                <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                    <div tabIndex="0" aria-label="4 stars" role="img" className="focus:outline-none flex items-center">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg" alt="yellow star" />
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg" alt="yellow star" />
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg" alt="yellow star" />
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg" alt="yellow star" />
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg2.svg" alt="gray star" />
                    </div>
                </div>
                <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                    <div className="xl:pr-16 w-full xl:w-1/2">
                        <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                            <a tabIndex="0" className="focus:outline-none  text-gray-800 dark:text-gray-100">
                                <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl  font-medium tracking-normal">{clientName ? clientName : "Cliente"}</h2>
                            </a>
                            <p tabIndex="0" className="focus:outline-none text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">
                                {clientEmail ? clientEmail : "mail@mail.com"}
                            </p>
                        </div>
                        <p tabIndex="0" className="focus:outline-none text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">
                            This is your resume in your bank account
                        </p>
                    </div>
                    <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/2">
                        <div className="mr-6 xl:mr-10">
                            <h2 tabIndex="0" className="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                                $ {myBalance}
                            </h2>
                            <a tabIndex="0" className=" focus:outline-none text-gray-800 dark:text-gray-100 ">
                                <p className=" text-sm xl:text-xl leading-5">Balance</p>
                            </a>
                        </div>
                        <div className="mr-6 xl:mr-10">
                            <h2 tabIndex="0" className="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                                {totalDeposits}
                            </h2>
                            <a tabIndex="0" className=" focus:outline-none text-gray-800 dark:text-gray-100 ">
                                <p className=" text-sm xl:text-xl leading-5">Deposits</p>
                            </a>
                        </div>
                        <div>
                            <h2 tabIndex="0" className="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                                {totalWithdraws}
                            </h2>
                            <a tabIndex="0" className=" focus:outline-none text-gray-800 dark:text-gray-100 ">
                                <p className=" text-sm xl:text-xl leading-5">Withdraws</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;
