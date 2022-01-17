import { BrowserRouter, Route, Routes } from "react-router-dom";

import BankState from "./Context/BankState";
import TwNavbar from "./Components/TwNavbar";
import TwFooter from "./Components/TwFooter";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

function App() {
    return (
        <div className="App">
            <BankState>
                <BrowserRouter>
                    <header>
                        <TwNavbar />
                    </header>
                    <main className="container calcH">
                        <Routes>
                            <Route exact path="/index.html" element={<>Home</>}></Route>
                            <Route exact path="/" element={<>Home</>}></Route>
                            <Route path="/deposit" element={<Deposit />}></Route>
                            <Route path="/withdraw" element={<Withdraw />}></Route>
                            <Route path="/signin" element={<Signin />}></Route>
                            <Route path="/signup" element={<Signup />}></Route>
                            <Route path="*" element={<>Not exists</>}></Route>
                        </Routes>
                    </main>
                    <TwFooter />
                </BrowserRouter>
            </BankState>
        </div>
    );
}

export default App;
