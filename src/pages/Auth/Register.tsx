import React, { useRef } from "react";
import {
    Button,
    Checkbox,
    Datepicker,
    FileInput,
    Label,
    Select,
    TextInput,
} from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [fullName, setFullName] = React.useState("");
    const [birthDay, setBirthDay] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [gender, setGender] = React.useState("Nam");
    const [avatar, setAvatar] = React.useState("default");
    const [preview, setPreview] = React.useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setAvatar(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = {
            email,
            password,
            username: userName,
            fullName,
            dateOfBirth: birthDay,
            gender,
            avatar,
        };
        try {
            const response = await axios.post(
                "http://localhost:5007/api/user/register",
                form,
            );
            if (response.status === 200) {
                toast.success("Register successful");
                navigate("/auth/");
            }
        } catch (error) {
            console.error("Error posting user data:", error);
        }
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
                    className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome to
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="flex max-w-md flex-col gap-4"
                        >
                            <div className="flex flex-col items-center">
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-20 h-20 rounded-full  bg-gray-200 flex items-center justify-center cursor-pointer"
                                >
                                    {preview ? (
                                        <img
                                            src={preview}
                                            alt="Avatar Preview"
                                            className="h-full rounded-full"
                                        />
                                    ) : (
                                        <span className="text-gray-500">No Image</span>
                                    )}
                                </div>
                                <FileInput
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Full Name" />
                                </div>
                                <TextInput
                                    id="full_name"
                                    type="text"
                                    placeholder="Yukiharaaaa"
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="birth_day" value="BirthDay" />
                                </div>
                                <Datepicker
                                    onChange={(date) =>
                                        setBirthDay(date ? date.toISOString().split("T")[0] : "")
                                    }
                                />
                                <div className="mb-2 block">
                                    <Label htmlFor="gender" value="Gender" />
                                </div>
                                <Select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="Male">Nam</option>
                                    <option value="Female">Nữ</option>
                                </Select>
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="UserName" value="Username" />
                                </div>
                                <TextInput
                                    id="username"
                                    type="text"
                                    autoComplete="username"
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="yukiharaaaa"
                                    required
                                />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" />
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@flowbite.com"
                                    required
                                    autoComplete="email"
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
                                        required
                                        autoComplete="current-password"
                                        onChange={(e) => setPassword(e.target.value)}
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

                            <Button type="submit">SignUp</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
