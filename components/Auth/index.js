"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postRequest } from "../../utils/apiRequestes";
import { updateUser } from "@/redux/slices/authSlice";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [isOtp, setIsOtp] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailCurrentValue, setEmailCurrentValue] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    setError(false);
    setLoading(true);
    const res2 = await postRequest(
      `${process.env.APP_API_URL}/stores/login/email`,
      {
        email: values.email,
        store_id: 3,
      }
    );
    setLoading(false);
    if (res2.status === 200) {
      setIsOtp(true);
      setEmail(values.email);
    } else {
      setError(res2?.message || "Something went wrong");
    }
  };

  const onVerify = async () => {
    setError(false);
    setLoading(true);
    const res2 = await postRequest(
      `${process.env.APP_API_URL}/stores/otp/verify/email`,
      {
        email: email,
        otp: code,
      }
    );

    setLoading(false);
    if (res2?.user) {
      console.log("res", res2);
      dispatch(updateUser(res2));
      setError(false);
      console.log("success");
      setIsSuccess(true);
      localStorage.setItem("x_auth_token", res2?.access_token);
    } else {
      setError("Code is not correct.");
      console.log("error");
      setIsSuccess(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (code.length === 4) {
      onVerify();
    } else {
      setError(false);
      setIsSuccess(false);
    }
  }, [code]);

  const fakeBtn = () => {
    if (code.length === 4) {
      if (error) setError("Please enter correct code");
    }
  };

  const resendEmail = async () => {
    setError(false);
    setLoading(true);
    const res2 = await postRequest(
      `${process.env.APP_API_URL}/stores/login/email`,
      {
        email: email,
        store_id: 3,
      }
    );
    setLoading(false);
    if (res2.status === 200) {
      setIsOtp(true);
      setEmail(email);
    } else {
      setError(res2?.message || "Something went wrong");
    }
  };

  return (
    <section className="flex-1 h-full flex flex-col items-center justify-center">
      {loginOpen ? (
        <Login
          isOtp={isOtp}
          handleLogin={handleLogin}
          setCode={setCode}
          error={error}
          loading={loading}
          isSuccess={isSuccess}
          code={code}
          setEmailCurrentValue={setEmailCurrentValue}
          fakeBtn={fakeBtn}
          resendEmail={resendEmail}
          setLoginOpen={setLoginOpen}
        />
      ) : (
        <SignUp />
      )}
    </section>
  );
};

export default Auth;
