import { BrowserRouter, Route, Routes } from "react-router-dom";

import BankState from "./Context/BankState";
import TwNavbar from "./Components/TwNavbar";
import TwFooter from "./Components/TwFooter";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import Balance from "./Pages/Balance";
import History from "./Pages/History";

function App() {
    return (
        <BankState>
            <div className="App">
                <BrowserRouter>
                    <header>
                        <TwNavbar />
                    </header>
                    <main className="container flex justify-center calcH">
                        <Routes>
                            <Route exact path="/index.html" element={<Signin />}></Route>
                            <Route exact path="/" element={<Signin />}></Route>
                            <Route path="/deposit" element={<Deposit />}></Route>
                            <Route path="/withdraw" element={<Withdraw />}></Route>
                            <Route path="/balance" element={<Balance />}></Route>
                            <Route path="/signin" element={<Signin />}></Route>
                            <Route path="/signup" element={<Signup />}></Route>
                            <Route path="/history" element={<History />}></Route>
                            <Route path="*" element={<PageNotFound/>}></Route>
                        </Routes>
                    </main>
                    <TwFooter />
                </BrowserRouter>
            </div>
        </BankState>
    );
}

export default App;
