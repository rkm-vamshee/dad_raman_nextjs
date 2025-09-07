/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import RouteConstants from "@/app/_shared/constants/RouteConstants";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
    email: string;
    password: string;
};

const LoginPage = () => {
        const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit: SubmitHandler<any> = (data:any) => {
        console.log(data);

        // setLoading(true);
        // axios
        //     .post(Endpoints.ADMIN_LOGIN, data)
        //     .then((response) => {
        //         console.log(response.data);
        //         if (response.data.status === "SUCCESS") {
        //             if (response.data.data.role === "ADMIN") {
        //                 // localStorage.setItem("token", response.data.token);
        //                 StorageManager.setStudentDetails(response.data.data);
        //                 _router.push(RouteConstants.DASHBOARD);
        //             }
        //             if (response.data.data.role === "STUDENT") {
        //                 // localStorage.setItem("token", response.data.token);
        //                 StorageManager.setStudentDetails(response.data.data);
        //                 _router.push(RouteConstants.STUDENT_MY_EXAMS);
        //             }
        //         } else {
        //             alert("Invalid credentials");
        //         }
        //         setLoading(false);
        //     })
        //     .catch((error) => {
        //         console.error("There was an error!", error);
        //     });
        console.log(data);
        
    };
    return (
        <main className="flex justify-center items-center h-screen">
            {/* <div className="w-[50%] vcard  "> */}
                    <div className=" w-[25%] vcard login-card bg-gradient-to-r from-indigo-500 to-blue-500">

                {/* Title */}
                <div className="card_header">
                    <h1 className=" text-center text-white text-3xl my-4">Login</h1>
                </div>
                <div className="card_body">
                    {/* Form */}
                 <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label
                                    htmlFor="username"
                                    className="vform-label text-white"
                                >
                                    Email Id
                                </label>
                              
                                <input
                                    type="text"
                                    className="vform-control text-white"
                                    id="username"
                                    {...register("email", { required: true })}
                                />
                                {errors && errors?.email && (<p className="text-white text-xs">Email is Required</p>)}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="vform-label text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="vform-control text-white"
                                    id="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                 {errors && errors?.password && (<p className="text-white text-xs">Password is Required</p>)}
                            </div>
                            <div className="mb-3 flex justify-between">
                                <button
                                    type="submit"
                                    className="btn btn-primary border-2 border-white"
                                >
                                    Login
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary border-2 border-white"
                                    onClick={()=>router.replace(RouteConstants.NUMEROLOGY_CALCULATOR)}
                                >
                                    Go To Numerology Calculator
                                </button>
                            </div>
                        </form>
                </div>
                <div className="card_footer"></div>
                {/* Btn */}
            </div>
        </main>
    );
};

export default LoginPage;
