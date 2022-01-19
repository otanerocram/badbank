import { useContext, useState } from "react";
import BankContext from "../Context/BankContext";

const History = () => {
    const { state } = useContext(BankContext);
    const [historyItems] = useState(state.movements);
    //payload: { date: mydate, operation: "withdraw", amount: 500 },
    return (
        <div className="container mx-auto pt-8">
            <div className="lg:flex rounded-lg h-full">
                <div
                    className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none bg-cover bg-center"
                    style={{ backgroundImage: "url('https://picsum.photos/id/419/670/1200')" }}
                ></div>
                <div className="xl:w-4/5 lg:w-4/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                    <div className="w-full bg-white p-10 h-full rounded-xl">
                        <h1
                            tabIndex={0}
                            role="heading"
                            aria-label="profile information"
                            className="focus:outline-none text-3xl font-bold text-gray-800 mt-12 pb-2"
                        >
                            All Movements
                        </h1>
                        <ul>
                            {historyItems.map((historyItem, idx) => (
                                <li key={idx}>
                                    Date: {historyItem.date} | Operation: {historyItem.operation} | Ammount:{" "}
                                    {historyItem.operation === "deposit" ? historyItem.amount : `-${historyItem.amount}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
