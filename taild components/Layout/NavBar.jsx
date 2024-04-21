import React from "react";

/* import "./styles.css"; */
import { BiBookContent, BiServer, BiEnvelope } from "react-icons/bi";
import { AiOutlineHome, AiOutlineUser, AiOutlineFile } from "react-icons/ai";
/* 

AiOutlineHome
AiOutlineUser
AiOutlineFile
BiBookContent
BiServer
BiEnvelope
*/

export default function NavBar() {
  return (
    <>
      <nav className="nav-menu navbar">
        <ul className="flex flex-col md:flex-colum items-start ">
          <li>
            <a href="#hero" className="nav-link scrollto active gap-2">
              <AiOutlineHome className="icon text-2xl" /> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link scrollto gap-2">
              <AiOutlineUser className="icon text-2xl" /> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link scrollto gap-2">
              <AiOutlineFile className="icon text-2xl" /> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link scrollto gap-2">
              <BiBookContent className="icon text-2xl" /> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link scrollto gap-2">
              <BiServer className="icon text-2xl" /> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link scrollto gap-2">
              <BiEnvelope className="icon text-2xl" /> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
