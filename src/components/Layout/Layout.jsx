import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import s from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={s.container}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500} />
    </div>
  );
}
