"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/app/firebase";
import InputBox from "@/app/components/common/inputBox";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSign, setSign] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    if (!isSign) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        setError(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="border-double border-sky-500 rounded-lg border-8 p-8 bg-white shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6  w-[25vw]">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              {isSign ? "Sign In" : "Sign Up"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <p className="text-sm text-center">
            {isSign ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setSign(!isSign)}
              className="text-sky-500 hover:underline focus:outline-none"
            >
              {isSign ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
