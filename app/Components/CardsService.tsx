import Image from "next/image";

function CardsService(props) {
  return (
    <div className="w-full p-4">
      <div className="border border-[#ff6e54] p-6 m-4 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto text-wrap rounded-2xl shadow-2xl">
        <div className="flex justify-center">
          {props.images && (
            <Image
              className="rounded-3xl w-32 h-32 object-cover"
              src={props.images}
              alt={props.alt}
              width={140}
              height={140}
            />
          )}
        </div>

        <h1 className="text-2xl md:text-3xl text-center mt-4 overflow-hidden text-ellipsis whitespace-nowrap">
          <strong>{props.nom}</strong>
        </h1>
        <div className="mt-4 text-center overflow-hidden text-ellipsis">
          <p className="text-sm md:text-base">{props.description}</p>
        </div>
        <div className="flex justify-end mt-6">
          <button className="cursor-pointer px-5 py-2 font-medium text-white bg-[#ff6e54] hover:bg-red-700 rounded-lg text-center">
            toto
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsService;
