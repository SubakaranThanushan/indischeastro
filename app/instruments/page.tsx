"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

export default function InstrumentsPage() {
  const [instruments, setInstruments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("instruments").select("*");
        if (error) throw new Error("Erreur de récupération des données");
        setInstruments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Liste des Instruments</h1>
      <ul className="list-disc pl-5 mt-4">
        {instruments.map((instrument) => (
          <li key={instrument.id} className="text-lg">
            {instrument.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
