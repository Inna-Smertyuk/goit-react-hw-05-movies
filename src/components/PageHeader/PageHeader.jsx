import React from "react";
import s from "./PageHeader.module.css";

export default function PageHeader({ children }) {
  return <h1 className={s.header}>{children}</h1>;
}
