"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CardsService(props) {
  const router = useRouter();

  const handleClick = () => {
    console.log("ID du service :", props.id);
    if (props.id) {
      router.push(`/services/${props.id}`);
    } else {
      console.error("Erreur : ID du service non défini !");
    }
  };

  return (
    <div className="w-full p-4">
      <div
        className="border border-[#260c5656] p-6 m-4 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto text-wrap rounded-2xl shadow-2xl cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={handleClick}
        role="button"
        aria-label={`Mehr Details über ${props.nom}`}
      >
        {/* Image */}
        <div className="flex justify-center">
          {props.images && (
            <Image
              className="rounded-3xl w-full h-48 object-cover"
              src={props.images}
              alt={`${props.nom} - Astrologische Dienstleistung`}
              width={140}
              height={140}
              title={props.nom}
              loading="lazy"
            />
          )}
        </div>

        {/* Nom */}
        <h2 className="text-2xl md:text-3xl text-center mt-4 whitespace-normal">
          <strong>{props.nom}</strong>
        </h2>

        {/* Description */}
        <div className="mt-4 text-center">
          <p className="text-sm md:text-base">{props.description}</p>
        </div>

        {/* Prix et durée */}
        {props.pricetime && (
          <div className="grid grid-cols-2 mt-5">
            <div>
              <p>
                Preis:{" "}
                <strong className="text-[#ff6e54]">{props.price} CHF</strong>
              </p>
            </div>
            <div>
              <p>
                Dauer:{" "}
                <strong className="text-[#ff6e54]">{props.time} Min</strong>
              </p>
            </div>
          </div>
        )}

        {/* Bouton */}
        <div className="flex justify-end mt-6">
          <button
            className="cursor-pointer px-5 py-2 font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center"
            aria-label={`Details zu ${props.nom} ansehen`}
          >
            Details ansehen
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsService;
