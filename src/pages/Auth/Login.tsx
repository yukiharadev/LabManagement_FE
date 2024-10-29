import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

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
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Welcome back !!!
            </h1>
            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="name@flowbite.com"
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
                    required
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
                <a
                  href={""}
                  className="text-sm text-blue-600 dark:text-gray-300"
                >
                  Forgot your password?
                </a>
              </div>
              <Button type="submit">Login</Button>
            </form>
            <div className="flex items-center justify-center mt-3">
              Don't have an account ?&nbsp;
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
