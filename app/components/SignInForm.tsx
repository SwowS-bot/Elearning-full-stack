"use client";

import React, { useEffect, useState } from "react";
import { signUp } from "../actions/users/signUp";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const { status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Signing in...");
    const message = await signUp(email, password);
    setMessage(message);
  };

  useEffect(() => {
    if(status === "authenticated"){
        router.refresh()
        router.push('/')
    }
  })

  return (
    <div className="flex flex-col gap-4 bg-gray-400 p-4">
      <input
        type="text"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleSubmit}>Sign In</button>
      <p>{message}</p>
    </div>
  );
};

export default SignInForm;
