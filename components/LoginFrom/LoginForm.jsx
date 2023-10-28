"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (isEmailValid(userName)) {
      if(password.length > 0){
        const user = {
          userName: userName,
          password: password,
        };
  
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      }
      else{
        setError("Please enter valid Password...");
  
        setTimeout(() => {
          setError("");
        }, 3000);
      }
      
    } else {
      setError("Please enter valid Email...");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {error && (
        <>
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">{error}</strong>
          </div>
        </>
      )}
      <input
        className="appearance-none bg-transparent border-b-2 border-gray-300 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Username *"
        aria-label="usename"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        className="appearance-none bg-transparent border-b-2 border-gray-300 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="password"
        placeholder="Password *"
        aria-label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="flex-shrink-0 bg-gray-200 hover:bg-gray-300 border-gray-200 hover:border-gray-300 text-sm border-4  py-2 px-2 rounded shadow-md font-semibold"
        type="button"
        onClick={handleLogin}
      >
        LOGIN
      </button>
    </div>
  );
};

export default LoginForm;

function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function isPasswordValid(password) {
  // Define password criteria
  const minLength = 8; // Minimum password length
  const hasUppercase = /[A-Z]/.test(password); // At least one uppercase letter
  const hasLowercase = /[a-z]/.test(password); // At least one lowercase letter
  const hasNumber = /\d/.test(password); // At least one digit
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password); // At least one special character

  // Check if the password meets all criteria
  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar
  );
}
