import { Fragment, useEffect, useContext, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, CashIcon, CurrencyDollarIcon } from "@heroicons/react/outline";
import { NavLink, useNavigate } from "react-router-dom";
import BankContext from "../Context/BankContext";

const topMenuList = [
    {
        name: "Balance",
        description: "Balance account",
        href: "/balance",
        icon: CurrencyDollarIcon,
    },
    {
        name: "Deposit",
        description: "Make a deposit/transfer between your own accounts",
        href: "/deposit",
        icon: CashIcon,
    },
    {
        name: "Withdraw",
        description: "Do you need money?, make a withdraw now",
        href: "/withdraw",
        icon: CurrencyDollarIcon,
    },
    {
        name: "All Movements",
        description: "Do you need money?, make a withdraw now",
        href: "/history",
        icon: CurrencyDollarIcon,
    },
];

const loginSignupList = [
    {
        name: "Login",
        description: "Login to your account",
        href: "/signin",
    },
    {
        name: "Create Account",
        description: "Create your Account",
        href: "/signup",
    },
];

export default function TwNavbar() {
    const { state, dispatch	 } = useContext(BankContext);
    const [isRegistered, setIsRegistered] = useState(state.isLogged);
    let navigate = useNavigate();

    useEffect(() => {
        console.log(`state:`);
        console.log(state);

        !state.isLogged && navigate("../signin", { replace: true });

        setIsRegistered(state.isLogged);
    }, [state]);

    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <NavLink to="/" className="text-3xl font-sans font-extra-bold">
                            {/* <span className="sr-only">Workflow</span> */}
                            <span className="text-indigo-600">Bad</span>
                            <span className="text-lime-500">Bank</span>
                            {/* <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" /> */}
                        </NavLink>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    {isRegistered && (
                        <>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                {topMenuList.map((topMenuItem, idx) => (
                                    <NavLink
                                        to={topMenuItem.href}
                                        className={({ isActive }) =>
                                            isActive ? "text-indigo-500 font-bold hover:text-gray-900" : "text-base font-medium text-gray-500 hover:text-gray-900"
                                        }
                                        key={idx}
                                    >
                                        {topMenuItem.name}
                                    </NavLink>
                                ))}
                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-6">
                                <NavLink
                                    to="#"
                                    className="text-orange-700 font-bold hover:text-gray-900"
                                    onClick={ () =>{
                                        dispatch({
                                            type: "SIGNIN",
                                            payload: false
                                        });
                                        
                                        setIsRegistered(false);
                                        
                                    }}
                                >
                                    Logout
                                </NavLink>
                            </div>
                        </>
                    )}

                    {!isRegistered && (
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-6">
                            {loginSignupList.map((loginSignupItem, idx) => (
                                <NavLink
                                    to={loginSignupItem.href}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-indigo-500 font-bold hover:text-gray-900"
                                            : "text-base font-medium text-gray-500 hover:text-white hover:bg-indigo-600 hover:py-1 hover:px-2 hover:rounded-xl"
                                    }
                                    key={idx}
                                >
                                    {loginSignupItem.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-white" style={{ zIndex: 1 }}>
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            {isRegistered && (
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        {topMenuList.map((item) => (
                                            <NavLink key={item.name} to={item.href} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                            </NavLink>
                                        ))}
                                    </nav>
                                </div>
                            )}
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <NavLink
                                    to="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </NavLink>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{" "}
                                    <NavLink to="#" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
