"use client";
import { supabase } from "@/lib/supabaseClient";
import CardsService from "../Components/CardsService";
import { useState, useEffect } from "react";

export default function ServicePrice() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function inportationSerice() {
      const { data, error } = await supabase.from("services").select("*");

      if (!error) {
        setServices(data);
      } else {
        console.log(error);
      }
    }
    inportationSerice();
  });
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="mt-7 text-3xl font-bold text-black text-center">
        Unsere Dienstleistungen
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 max-w-screen-lg">
        {services.map((service) => (
          <CardsService
            key={service.id}
            id={service.id}
            images={service.image}
            nom={service.nom}
            description={service.description}
            alt={service.alt}
            price={service.price}
            time={service.time}
            pricetime={true}
          />
        ))}
      </div>
      <button className="bg-amber-300 mt-4 px-6 py-2 rounded-lg">
        Voir plus
      </button>
    </div>
  );
}
