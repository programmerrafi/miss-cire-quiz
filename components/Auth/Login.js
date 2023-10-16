"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AppForm, FormBtn, FormInput } from "../shared/Form";
import { Form } from "formik";
import Button from "../shared/Button";
import OtpInput from "react-otp-input";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Field should contain a valid e-mail")
    .required("E-mail is required"),
});

function Login({
  isOtp,
  handleLogin,
  setCode,
  code,
  error,
  loading,
  isSuccess,
  setEmailCurrentValue,
  resendEmail,
  fakeBtn,
  setLoginOpen,
}) {
  return (
    <div className="lg:p-5 w-full h-screen lg:gap-6 flex lg:flex-row flex-col relative">
      <div className="lg:w-[47%] lg:h-full flex flex-col justify-center items-center lg:!relative bg-black absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 w-[95%] z-[500] h-[65%] rounded-t-[30px] lg:rounded-t-none mx-auto">
        <Image
          src="https://www.misscire.com/cdn/shop/files/Miss-Cire-Logo-White_x35@2x.png?v=1613174703"
          width={200}
          height={100}
          alt="logo"
          className="mt-7"
        />
        <h2 className="text-white font-medium text-xl mt-6 mb-6">
          Official Influencer Program
        </h2>
        <div className="max-w-[370px] w-full px-4 lg:px-0">
          {!isOtp ? (
            <div className="rounded-md my-10 py-5 w-full">
              <AppForm
                initialValues={{
                  email: "",
                }}
                onSubmit={handleLogin}
                validationSchema={validationSchema}
              >
                <Form>
                  <div className="relative">
                    <FormInput
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      setEmailCurrentValue={setEmailCurrentValue}
                      // isNicePhone
                      autoFocus
                    />
                    <FormBtn title="Log In" loading={loading} />
                  </div>
                  {error && (
                    <p className="text-center text-sm text-red-500 mt-5">
                      {error}
                    </p>
                  )}
                </Form>
              </AppForm>

              <p className="text-center text-base font-light py-6 text-[#848484]">
                or
              </p>

              <Button
                onClick={() => setLoginOpen(false)}
                title="Join Us"
                className="!text-white !bg-[#000] !border !border-[#565656] w-full"
              />
            </div>
          ) : (
            <div className="mx-auto w-full lg:w-[350px] rounded-md my-10 py-5">
              <div className="">
                <p className="text-center text-sm w-2/3 mx-auto">
                  Please Insert your code
                </p>
                <div className="mt-6">
                  <OtpInput
                    shouldAutoFocus
                    inputStyle={{
                      width: "70px",
                      height: "70px",
                      // margin: '4px',
                      fontSize: "2rem",
                      // borderRadius: 15,
                      fontWeight: "bold",
                      padding: 0,
                      borderBottom: "1px solid #dfdfdf",
                      backgroundColor: "#000",
                      outline: "none",
                      color: "#EC4F87",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.03)",
                    }}
                    containerStyle={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                    errorStyle={{
                      backgroundColor: "#EC4F87",
                    }}
                    hasErrored={error}
                    value={code}
                    onChange={setCode}
                    numInputs={4}
                    inputType="tel"
                    placeholder=""
                    renderSeparator={<span className="px-2"></span>}
                    renderInput={(props) => <input {...props} />}
                  />
                  {error && (
                    <p className="text-center text-sm text-red-500 mt-5">
                      {error}
                    </p>
                  )}
                  {isSuccess && (
                    <p className="text-center text-sm text-green-500 mt-5">
                      Code is correct
                    </p>
                  )}
                  <Button
                    className="w-full py-3 mt-14"
                    title="Submit"
                    loading={loading}
                    onClick={fakeBtn}
                  />
                  <div className="flex justify-center gap-2 mt-8 items-center">
                    Didn't receive a code?
                    <p
                      onClick={() => resendEmail()}
                      className="text-center cursor-pointer text-[#EC4F87]"
                    >
                      Resend
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-[53%] w-full h-[65%] lg:h-full">
        <Image
          src="/Images/beauti.png"
          width={0}
          height={0}
          sizes="100vw"
          loading="eager"
          className="w-full h-full lg:!object-contain object-cover"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Login;
