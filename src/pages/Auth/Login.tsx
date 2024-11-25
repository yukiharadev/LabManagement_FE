import React, { useState, useEffect } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { LOGIN_URL } from "../../configs/Api.config.tsx";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = { username: userName, password };
        try {
            const response = await axios.post(
                LOGIN_URL,
                form,
            );
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("username", userName);
            setIsLoggedIn(true);
        } catch (error) {
            console.error(error);
            toast.error("Login failed");
        }
        console.log(form);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="/"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    Lab Management
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome back !!!
                        </h1>
                        <form
                            className="flex max-w-md flex-col gap-4"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" />
                                </div>
                                <TextInput
                                    id="text"
                                    type="username"
                                    autoComplete="username"
                                    placeholder="yukihara"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your password" />
                                </div>
                                <div className="relative">
                                    <TextInput
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        autoComplete="current-password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-4 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {!showPassword ? (
                                            <HiEyeOff className="text-gray-400" />
                                        ) : (
                                            <HiEye className="text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                                <a href="" className="text-sm text-blue-600 dark:text-gray-300">
                                    Forgot your password?
                                </a>
                            </div>
                            <Button type="submit">Login</Button>
                        </form>
                        <div className="flex items-center justify-center mt-3">
                            Don't have an account?&nbsp;
                            <Link
                                to="/auth/register"
                                className="text-blue-600 dark:text-blue-400"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
