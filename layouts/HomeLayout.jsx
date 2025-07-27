import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LeatestNews from "../components/LeatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto py-3">
          <LeatestNews />
        </section>
      </header>
      <main>
        <section className="nav_left"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="nav_right"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
