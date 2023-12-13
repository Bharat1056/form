import React, { useRef, useState, useContext } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/context";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather";
import { eyeOff } from "react-icons-kit/feather";

export function SignInThree() {
  // for navigation page
  const navaigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  // state manangement for username, email and password
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  // selector for username, email and password
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // update value for username, email and password
  const setUpUserName = (e) => {
    setUser(e.target.value);
  };
  const setUpEmail = (e) => {
    setEmail(e.target.value);
  };
  const setUpPassword = (e) => {
    setPassword(e.target.value);
  };

  // validation check for email and password
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
  const pwdRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPwdError("");
    setUserError("");
    const emailValid = emailRegex.test(email);
    const pwdValid = pwdRegex.test(password);
    console.log(pwdValid);
    if (emailValid && pwdValid && user !== "") {
      emailRef.current.value = "";
      passwordRef.current.value = "";
      userRef.current.value = "";
      return navaigate("signUp");
    } 
    
    
    else if (user === "") {
      setUserError("Enter username");
    } else if (!emailValid) {
      setEmailError("Email should look like : name@domain.com");
    } else if (!pwdValid) {
      setPwdError(
        "Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase, lowercase and speical characters"
      );
    }
  };

  return (
    <section style={{
      color: "white",
      marginRight: "0px",
      marginLeft: "0px",
      // width: "100",
    }}>
      <div className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 flex items-center justify-center"
                      style={{
                        backgroundColor: "white"
                      }}
      >
        <div className="2xl:max-w-md xl:mx-auto xl:w-full xl:max-w-sm ">
          {/* logo section */}
          <div className="mb-2 flex justify-center">
            <svg
              width="50"
              height="56"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              />
            </svg>
          </div>

          {/* headline section */}
          <h2 className="text-center text-2xl font-bold leading-tight text-black"
          >
            Sign in to your account
          </h2>

          {/* create a free account section */}
          <p className="mt-2 text-center text-sm text-gray-600 "       >
            Don&apos;t have an account?{" "}
            <Link
              to={""}
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
             
            >
              Create a free account
            </Link>
          </p>

          {/* form section */}
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              {/* username section */}
              <div>
                {/* username label section */}
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                  
                >
                  {" "}
                  Username{" "}
                </label>
                {/* username input field section */}
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    type="text"
                    placeholder="Username"
                    ref={userRef}
                    value={user}
                    onChange={(e) => setUpUserName(e)}
                  ></input>
                  <p className="text-sm text-red-800">{userError}</p>
                </div>
              </div>

              {/* email addres section */}
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    type="email"
                    placeholder="Email"
                    ref={emailRef}
                    value={email}
                    onChange={(e) => setUpEmail(e)}
                  ></input>
                  <p className="text-sm text-red-800">{emailError}</p>
                </div>
              </div>

              {/* password and forgot password section */}
              <div >
                {/* forgot password section */}
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                      style={{
                        color: "black"
                      }}
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <Link
                    to={""}
                    title=""
                    className="text-sm font-semibold text-black hover:underline"
                   
                  >
                    {" "}
                    Forgot password?{" "}
                  </Link>
                </div>
                {/* password section */}
                <div className="relative mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    type={type}
                    placeholder="Password"
                    ref={passwordRef}
                    value={password}
                    onChange={(e) => setUpPassword(e)}
                    autoComplete="new-password"
                  ></input>
                  <p className="text-xs text-red-800">{pwdError}</p>
                  <span
                    class="right-0 flex justify-around items-center"
                    onClick={handleToggle}
                  >
                    <Icon
                      class="right-0 top-1.5 absolute mr-3"
                      icon={icon}
                      size={20}
                    />
                  </span>
                </div>
              </div>

              {/* Login button section */}
              <div>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Log In <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
