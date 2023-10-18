"use client";
import Auth from "@/components/Auth";
import { selectUser, updateUser } from "@/redux/slices/authSlice";
import { getRequest } from "@/utils/apiRequestes";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

function HomeLayout({ children }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser("user"));
  }, []);

  return (
    <main className="min-h-screen h-full flex flex-col">
      <Header />
      {user ? <>{children}</> : <Auth />}
      <Footer />
    </main>
  );
}

export default HomeLayout;
