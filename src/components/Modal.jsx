import { useState } from "react";

const Modal = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <button
            onClick={() => setOpenModal(!openModal)}
            className="flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out bg-white text-black "
          >
            <i className="fa-solid fa-play"></i>
            <span>Play</span>
          </button>

          <div
            className={`fixed left-[50%] transform ${
              openModal
                ? "translate-x-[-50%] opacity-100"
                : "translate-y-[-40%] translate-x-[-50%] opacity-0 pointer-events-none"
            } w-[90%] sm:w-[95%] lg:w-[50%] bg-black rounded-lg z-50 transition-all duration-300 max-h-[90%] overflow-y-auto ${
              openModal ? "top-[10%] sm:top-[30%] md:top-[20%] lg:top-[10%]" : "top-[40%]"
            }`}
          >
            <span
              onClick={() => setOpenModal(!openModal)}
              style={{ padding: "3px 10px" }}
              className="absolute top-3 rounded-full right-3 z-10 bg-black  text-white font-semibold cursor-pointer text-lg "
            >
              <i className="fa-solid fa-xmark"></i>
            </span>

            <div
              style={{
                backgroundImage:
                  "url(https://vmp-cms.telkomsel.com/sites/default/files/entry/0_u0gzdn8k/banner_xxhdpi.png)",
              }}
              className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
            </div>

            <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
              <h1 className="font-bold text-2xl">Happy Birthday, You</h1>
              <p>Hi You...</p>
              <p>
                You don t know me, and maybe you never will. But from afar, I’ve
                been inspired by your journey, your energy, and the way you
                light up the lives of so many. On this special day, I just
                wanted to send a simple wish: May your path continue to be as
                beautiful as the person you are, and may this year bring even
                more joy, love, and success into your life.
              </p>
              <p>
                With all my love,
                <br />
                Fahmi
              </p>
            </div>
          </div>
    </>
  )
}

export default Modal