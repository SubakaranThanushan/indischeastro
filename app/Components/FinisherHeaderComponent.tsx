// "use client";
// import { useEffect } from "react";
// import Script from "next/script";

// declare global {
//   interface Window {
//     FinisherHeader: any;
//   }
// }

// export default function FinisherHeaderComponents() {
//   useEffect(() => {
//     const initializeHeader = () => {
//       if (window.FinisherHeader) {
//         new window.FinisherHeader({
//           count: 100,
//           size: { min: 2, max: 13, pulse: 0 },
//           speed: {
//             x: { min: 0, max: 0.4 },
//             y: { min: 0, max: 0.6 },
//           },
//           colors: {
//             background: "#201e30",
//             particles: ["#fbfcca", "#d7f3fe", "#ffd0a7"],
//           },
//           blending: "overlay",
//           opacity: { center: 1, edge: 0 },
//           skew: 0,
//           shapes: ["c"],
//         });
//       } else {
//         console.error("FinisherHeader n'est pas chargé.");
//       }
//     };

//     if (document.readyState === "complete") {
//       initializeHeader();
//     } else {
//       window.addEventListener("load", initializeHeader);
//       return () => window.removeEventListener("load", initializeHeader);
//     }
//   }, []);

//   return (
//     <>
//       <Script src="/finisher-header.es5.min.js" strategy="afterInteractive" />
//       <div
//         className="header finisher-header"
//         style={{ width: "100%", height: "300px" }}
//       >
//         Logo, navigation, etc.
//       </div>
//     </>
//   );
// }
