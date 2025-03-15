// "use client";

// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
//   MarkerProps,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { useEffect, useState } from "react";

// // Icône personnalisée pour Leaflet
// const customIcon: L.Icon = new L.Icon({
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// interface MapProps {
//   address: string;
// }

// const MapView = ({ position }: { position: [number, number] }) => {
//   const map = useMap();
//   useEffect(() => {
//     if (position) {
//       map.setView(position, 13); // Définit la vue initiale
//     }
//   }, [position, map]);
//   return null;
// };

// const Map = ({ address }: MapProps) => {
//   const [position, setPosition] = useState<[number, number] | null>(null);

//   useEffect(() => {
//     const fetchCoordinates = async () => {
//       try {
//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//             address
//           )}`
//         );
//         const data = await response.json();
//         if (data.length > 0) {
//           setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
//         }
//       } catch (error) {
//         console.error(
//           "Erreur lors de la récupération des coordonnées :",
//           error
//         );
//       }
//     };

//     fetchCoordinates();
//   }, [address]);

//   return (
//     <div className="w-full h-[400px]">
//       {position ? (
//         <MapContainer className="w-full h-full">
//           <MapView position={position} />
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           {/* Correction : Ajout d'un cast explicite sur MarkerProps */}
//           <Marker position={position} icon={customIcon as MarkerProps["icon"]}>
//             <Popup>{address}</Popup>
//           </Marker>
//         </MapContainer>
//       ) : (
//         <p>Chargement de la carte...</p>
//       )}
//     </div>
//   );
// };

// export default Map;
