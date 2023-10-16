"use client";
import Auth from "@/components/Auth";
import { selectUser, updateUser } from "@/redux/slices/authSlice";
import { getRequest } from "@/utils/apiRequestes";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

function HomeLayout({ children }) {
  // const [xAuthToken, setXAuthToken] = useState("hello");
  const [xAuthToken, setXAuthToken] = useState(null);
  // const user = useSelector(selectUser);
  const user = null;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     const res = await getRequest(`${process.env.APP_API_URL}/stores/auth`);
  //     if (res?.user) {
  //       console.log("🚀 ~ file: index.js:29 ~ res:", res);
  //       dispatch(updateUser(res));
  //       localStorage.setItem("x_auth_token", res?.access_token);
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   const x_auth_token = localStorage?.getItem("x_auth_token");
  //   setXAuthToken(x_auth_token);
  // }, []);

  return (
    <main className="min-h-screen h-full flex flex-col">
      <Header />
      {user ? (
        <>{children}</>
      ) : (
        (xAuthToken === null || xAuthToken === undefined) && <Auth />
      )}
      <Footer />
    </main>
  );
}

export default HomeLayout;
