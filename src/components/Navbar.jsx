import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { useState } from "react";
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="md:container md:mx-auto px-5 xl:p-0 flex justify-between">
        <div className="flex items-center cursor-pointer text-[#e5e5e5] py-5 gap-10 ">
          <img src={logo} className="w-24 h-auto" alt="" />
          <ul className="hidden md:flex gap-5 text-sm ">
            <li>Home</li>
            <li>Series</li>
            <li>Movie</li>
            <li>New and Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="flex items-center gap-5 cursor-pointer">
          <img className="w-5 h-auto" src={search_icon} alt="" />
          <img className="w-5 h-auto" src={bell_icon} alt="" />
          <div onClick={() => setOpenModal(!openModal)} className="flex gap-2 relative">
            <img
              
              className="w-8 rounded h-8"
              src={profile_img}
              alt=""
            />
            <img src={caret_icon} alt="" />
            <div
              className={`dropdown absolute right-0 w-max bg-[#191919] ${openModal ? "block" : "hidden"} rounded z-10 text-white`}
              style={{ top: "100%", padding: "18px 22px" }}
            >
              <p className="text-base">Rifa Alysia Artanti ❤️</p>
              <span style={{ borderTop:"1px solid #fff", display:"block", margin:"8px 0px" }}></span>
              <p className="text-sm">Sign Out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
