import React from "react";
import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={s.container}>
      <Navigation />
    </header>
  );
}
