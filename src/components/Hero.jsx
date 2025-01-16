import Modal from "./Modal";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
      style={{
        backgroundImage:
          "url('https://vmp-cms.telkomsel.com/sites/default/files/entry/0_u0gzdn8k/banner_xxhdpi.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className="absolute text-white w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10"
        style={{ width: "100%", bottom: "0", paddingLeft: "6%" }}
      >
        <h1 className="text-2xl lg:text-4xl lg:w-[50%] font-bold">
          How to say Happy Birthday before I disappear back into the crowd.
        </h1>
        <p className="text-sm lg:text-base mb-5 lg:w-[40%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quidem?
        </p>
        <p>Click &quot;Play&quot; to see Detail</p>

        <div className="flex items-center gap-3">
          <Modal />

          <button className="flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out false bg-white/30 text-white">
            <i className="fa-solid fa-circle-info"></i>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
