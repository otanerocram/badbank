import { useState, useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import BankContext from "../Context/BankContext";
import * as Yup from "yup";

const Deposit = () => {
    const [signed, setSigned] = useState(false);
    const { state, loadData, dispatch } = useContext(BankContext);

    const depositSchema = Yup.object().shape({
        newAmmount: Yup.number()
        .required("nm")
    });

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        state.isLogged && setSigned(true);
    }, [state.isLogged]);

    const today = new Date();
    const fecha = today.toDateString();

    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div
                className="h-48 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: "url('https://picsum.photos/240/780/?blur')" }}
                title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                </div>

                <div className="h-full w-12/12 mx-auto mb-4 my-6 md:w-12/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white dark:bg-gray-800 rounded-md">
                    <div className="flex pb-3 items-center">
                        <p className="text-xl text-gray-800 dark:text-gray-100 font-semibold pl-2">Deposit</p>
                        <br />
                    </div>
                    <div>
                        <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pl-2">Actual Balance: $ {state.actualBalance}</p>
                    </div>

                    <Formik
                        initialValues={{ newAmmount: 0 }}
                        validationdepositSchema={depositSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                console.log("procesa");
                                setSubmitting(false);
                            }, 100);
                        }}
                    >
                        <Form className="w-full max-w-sm">
                            <div className="flex flex-col mt-8 items-left gap-2 border-b border-teal-500 py-2">
                                <label className="mb-3 text-sm leading-none text-gray-800">newAmmount</label>
                                <Field type="number" name="newAmmount" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                                <ErrorMessage name="newAmmount" component="div" className="text-xs text-red-500 font-bold" />
                                <button
                                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                    type="submit"
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
                        <p className="text-gray-600">{fecha}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deposit;
