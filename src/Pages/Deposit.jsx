import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import BankContext from "../Context/BankContext";
import * as Yup from "yup";

const Deposit = () => {
    const { state, dispatch } = useContext(BankContext);
    const today = new Date();
    const mydate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    const schema = Yup.object().shape({
        depositAmmount: Yup.number()
            .integer("The Ammount must be an integer")
            .positive("The ammount must be greater than Cero")
            .required("This field iss required"),
    });

    return (
        <div className="container mx-auto pt-8">
            <div className="lg:flex rounded-lg h-full">
                <div
                    className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none bg-cover bg-center"
                    style={{ backgroundImage: "url('https://picsum.photos/id/120/670/1200')" }}
                ></div>
                <div className="xl:w-4/5 lg:w-4/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                    <div className="w-full bg-white p-10 h-full rounded-xl">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                        </div>

                        <div className="w-12/12 mx-auto mb-4 my-6 md:w-12/12 sm:px-10 sm:py-6 py-4 px-4 bg-white dark:bg-gray-800 ">
                            <div className="flex pb-3 items-center">
                                <p className="text-xl text-gray-800 dark:text-gray-100 font-semibold pl-2">Deposit</p>
                                <br />
                            </div>
                            <div>
                                <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pl-2">Actual Balance: $ {state.actualBalance}</p>
                            </div>

                            <Formik
                                initialValues={{ depositAmmount: 0 }}
                                validationSchema={schema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        console.log("Processing deposit");
                                        console.log(values);
                                        dispatch({
                                            type: "UPDATE_BALANCE",
                                            payload: state.actualBalance + values.depositAmmount,
                                        });
                                        dispatch({
                                            type: "LOG_OPERATION",
                                            payload: { date: mydate, operation: "deposit", amount: values.depositAmmount },
                                        });
                                        Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: "Deposit approved",
                                            showConfirmButton: false,
                                            timer: 2500,
                                        });
                                        setSubmitting(false);
                                    }, 100);
                                }}
                            >
                                <Form className="w-full max-w-sm">
                                    <div className="flex flex-col mt-8 items-left gap-2 border-b border-teal-500 py-2">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Ammount</label>
                                        <Field
                                            type="number"
                                            name="depositAmmount"
                                            className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                        />
                                        <ErrorMessage name="depositAmmount" component="div" className="text-xs text-red-500 font-bold" />
                                        <button
                                            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                            type="submit"
                                            role="button"
                                            aria-label="Submit"
                                        >
                                            Deposit
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>

                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="https://picsum.photos/seed/picsum/200/300" alt="Avatar of Jonathan Reinink" />
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{state.userName}</p>
                                <p className="text-gray-600">{mydate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deposit;
