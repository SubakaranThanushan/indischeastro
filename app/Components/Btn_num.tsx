import { MdLocalPhone } from "react-icons/md";

import React from "react";
// import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";

function Btn_num() {
  const handleClick = async () => {
    if (navigator.userAgent.includes("WhatsApp")) {
      // WhatsApp is installed
      window.open(`whatsapp://send?phone=33664759583`);
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      window.open("https://wa.me/33664759583", "_blank");
    }
  };

  function fn_appel(): void {
    window.location.href = "tel:+33664759583";
  }
  return (
    <div className="grid grid-cols-2">
      <div
        className="bg-red-500 text-white p-2 rounded-full cursor-pointer fixed bottom-7 right-20 md:right-25"
        onClick={fn_appel}
      >
        <MdLocalPhone className="w-7 h-7 md:w-10 md:h-10" />
      </div>

      <div
        className="bg-green-600 w-min p-2 rounded-full fixed 
          bottom-7 right-3 cursor-pointer md:right-8"
        onClick={handleClick}
      >
        <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
      </div>
    </div>
  );
}
export default Btn_num;
