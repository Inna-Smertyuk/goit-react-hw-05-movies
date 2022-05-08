import React from "react";
import { Circles } from "react-loader-spinner";
import s from "../Loader/Loader.module.css";

export default function Loader() {
  return (
    <div className={s.loader}>
      <Circles height="100" width="100" color="#3f51b5" />
    </div>
  );
}
