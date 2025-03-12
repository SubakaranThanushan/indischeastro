import { useState } from "react";
import Image from "next/image";
import Etoile1 from "../../public/image/commentaire/etoile1.png";
import Etoile2 from "../../public/image/commentaire/etoile2.png";
import Etoile3 from "../../public/image/commentaire/etoile3.png";
import Etoile4 from "../../public/image/commentaire/etoile4.png";
import Etoile5 from "../../public/image/commentaire/etoile5.png";
import Google from "../../public/image/commentaire/google.png";

function CardsService(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mapEtoiles] = useState([Etoile1, Etoile2, Etoile3, Etoile4, Etoile5]);

  return (
    <div className="w-90 inline-block">
      <div className="   bg-zinc-100 shadow-xl p-6 m-6 w-full text-wrap rounded-2xl">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src={props.urlImage}
                alt={props.name}
                className="w-10 h-10 rounded-full object-cover"
                width={140}
                height={140}
              />
              <h1 className="text-xl hover:text-red-700 space-x-3.5">
                <strong>{props.name}</strong>
              </h1>
            </div>

            <Image src={Google} alt="Etoile" className="h-10 w-10" />
            {/* <div className="flex">
              {mapEtoiles.map((etoile, i) => (
                <Image className="w-3" key={i} src={etoile} alt={etoile} />
              ))}
            </div> */}
          </div>
          <div className="flex">
            {mapEtoiles.map((etoile, i) => (
              <Image className="w-3" key={i} src={etoile} alt={etoile} />
            ))}
          </div>
        </div>
        <div className="space-x-2">
          <p className="text-red-700 text-7xl">
            <strong>❝</strong>
          </p>
          <p
            className={`transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-3 overflow-hidden"
            }`}
          >
            {props.description}
          </p>
          <p className="text-red-700 text-7xl">
            <strong>❞</strong>
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 cursor-pointer mt-2"
        >
          {isExpanded ? "Moins" : "Lire la suite"}
        </button>
      </div>
    </div>
  );
}

export default CardsService;
