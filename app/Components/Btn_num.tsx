import { MdLocalPhone } from "react-icons/md";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

function Btn_num() {
  const whatsappLink = "https://wa.me/41792613331";
  const telLink = "tel:+41792613331";

  return (
    <div className="grid grid-cols-2">
      {/* Téléphone */}
      <a
        href={telLink}
        role="button"
        aria-label="Rufen Sie uns an"
        className="bg-red-500 text-white p-2 rounded-full cursor-pointer fixed bottom-7 right-20 md:right-25"
      >
        <MdLocalPhone className="w-7 h-7 md:w-10 md:h-10" />
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label="Schreiben Sie uns auf WhatsApp"
        className="bg-green-600 w-min p-2 rounded-full fixed bottom-7 right-3 cursor-pointer md:right-8"
      >
        <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
      </a>
    </div>
  );
}

export default Btn_num;
