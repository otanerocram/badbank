import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import BankContext from "../Context/BankContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    let navigate = useNavigate();
    const { dispatch } = useContext(BankContext);

    const schema = yup.object({
        username: yup.string().required("Please Enter a username"),
        email: yup.string().email().required("Please Enter your Email"),
        password: yup.string().required("Please Enter your password").matches("^.{8,}$", "Min 8 Character"),
    });

    return (
        <div className="container mx-auto pt-8">
            <div className="lg:flex rounded-lg h-full">
                <div
                    className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none bg-cover bg-center"
                    style={{ backgroundImage: "url('https://picsum.photos/id/196/670/1200')" }}
                ></div>
                <div className="xl:w-4/5 lg:w-4/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={schema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log("Creating Account");
                            console.log(values);

                            setTimeout(() => {
                                dispatch({
                                    type: "SIGNIN",
                                    payload: true,
                                });
                                dispatch({
                                    type: "SET",
                                    payload: {
                                        userEmail: values.email,
                                        userName: values.username,
                                    },
                                });
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Bienvenido",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                                navigate("../balance", { replace: true });
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form className="w-full bg-white p-10 h-full rounded-xl">
                            <h1
                                tabIndex={0}
                                role="heading"
                                aria-label="profile information"
                                className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
                            >
                                Create Account
                            </h1>

                            <div className="mt-8 md:flex items-center">
                                <div className="flex flex-col">
                                    <label className="mb-3 text-sm leading-none text-gray-800">Name</label>
                                    <Field
                                        type="text"
                                        name="username"
                                        className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                    />
                                    <ErrorMessage name="username" component="div" className="text-xs text-red-500 font-bold" />
                                </div>
                            </div>
                            <div className="mt-8 md:flex items-center">
                                <div className="flex flex-col">
                                    <label className="mb-3 text-sm leading-none text-gray-800">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-xs text-red-500 font-bold" />
                                </div>
                            </div>
                            <div className="mt-8 md:flex items-center">
                                <div className="flex flex-col ">
                                    <label className="mb-3 text-sm leading-none text-gray-800">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-xs text-red-500 font-bold" />
                                </div>
                            </div>
                            <button
                                type="submit"
                                // disabled={isSubmitting}
                                role="button"
                                onSubmit={(e) => {
                                    console.log(e);
                                }}
                                aria-label="Next step"
                                className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                            >
                                <span className="text-sm font-medium text-center text-gray-800 capitalize">Login</span>
                                <svg className="mt-1 ml-3" width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                                </svg>
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Signup;
