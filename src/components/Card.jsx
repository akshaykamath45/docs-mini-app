import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Card = () => {
  return (
    <div className="relative w-60 h-80 bg-zinc-900/80 rounded-[42px] text-white px-8 py-10 overflow-hidden ">
      <FaRegFileAlt />
      <p className="text-xs mt-5 font-semibold leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="footer absolute bottom-0  w-full -left-0">
        <div className="flex items-center justify-between  mb-5  px-8 py-3">
          <h5>0.4Mb</h5>
          <span className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-600">
            <LuDownload siz="0.7em" color="#000" />
          </span>
        </div>
        <div className="tag w-full py-4 bg-green-600 flex items-center justify-center ">
          <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
