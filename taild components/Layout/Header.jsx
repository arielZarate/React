import React, { useState } from "react";

import "./styles.css";

import { CgMenuRound, CgClose } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import NavBar from "./NavBar";
export default function Header() {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  let anchoSidebar = 70;

  return (
    <>
      {/* drawer boton*/}
      <header className="flex">
        <button
          className="absolute top-0 right-0 m-4 text-sky-400 z-50"
          onClick={handleToggleDrawer}
        >
          {open ? (
            <IoCloseCircleOutline className="text-4xl" />
          ) : (
            <CgMenuRound className="text-4xl" />
          )}
        </button>

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 z-20 w-${anchoSidebar} h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-full`}
        >
          <div
            className={`px-6 py-4 bg-slate-950 w-full h-screen transform transition-transform duration-300 ${
              open ? "translate-x-full" : "translate-x-0 "
            }`}
          >
            {/* contenido del drawer /sidebar en este caso*/}

            <div className="profile">
              <img src="src/assets/ariel.jpg" alt="" className="rounded-full" />
              <h1 className="text-white text-3xl">
                <a href="index.html">Ariel Zarate</a>
              </h1>

              <div className="social-links mt-3 text-center">
                <a href="#" className="">
                  <AiFillTwitterCircle />
                </a>
                <a href="#" className="facebook">
                  <BsFacebook />
                </a>
                <a href="#" className="instagram">
                  <SiInstagram />
                </a>
                <a href="#" className="google-plus">
                  <AiFillGoogleCircle />
                </a>
                <a href="#" className="linkedin">
                  <BsLinkedin className="" />
                </a>
              </div>
            </div>

            {/* navBar */}
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
}

/* 

  <div class="flex "></div>
      <div className="fixed inset-0 bg-zinc-900 bg-opacity-50 flex items-center justify-end z-50">
        <div
          className={`bg-white w-80 h-screen transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full "
          }`}
        >
          //contenido del drawer
        </div>

        <button
          className="absolute top-0 right-0 m-4 text-sky-400"
          onClick={handleToggleDrawer}
        >
          <CgMenuRound className="text-2xl" />
        </button>
      </div>

*/
