"use client";
import React, { useState } from "react";
import { aarilaviee, acemorton, ainaschavell, aio_lovee, akaikoneko, alala, alicebels, allotropp, lovelyen, m8a8ytip, maksim, mercelina, o0o, witch } from "../util/modelList";

const MyComponent = () => {

  const availableLinks = [
    ...akaikoneko,
    ...m8a8ytip,
    ...acemorton,
    ...ainaschavell,
    ...aio_lovee,
    ...alala,
    ...lovelyen,
    ...maksim,
    ...mercelina,
    ...o0o,
    ...witch,
    ...alicebels,
    ...allotropp,
    ...aarilaviee,
  ];


  // Starea pentru link-ul curent
  const [currentLink, setCurrentLink] = useState(availableLinks[0].src);
  const [currentLink2, setCurrentLink2] = useState(availableLinks[0].src); // Pornim cu primul link din listă
  const [currentLink3, setCurrentLink3] = useState(availableLinks[0].src);
  const [currentLink4, setCurrentLink4] = useState(availableLinks[0].src);

  // Funcție pentru a schimba link-ul curent la unul random din listă
  const changeLink = () => {
    const randomIndex = Math.floor(Math.random() * availableLinks.length);
    const randomIndex2 = Math.floor(Math.random() * availableLinks.length);
    setCurrentLink(availableLinks[randomIndex].src);
    setCurrentLink2(availableLinks[randomIndex2].src);
    const randomIndex3 = Math.floor(Math.random() * availableLinks.length);
    const randomIndex4 = Math.floor(Math.random() * availableLinks.length);
    setCurrentLink3(availableLinks[randomIndex3].src);
    setCurrentLink4(availableLinks[randomIndex4].src);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <iframe
          width="500"
          height="300"
          frameBorder="0"
          src={currentLink}
          allowFullScreen
        ></iframe>
        <iframe
          width="500"
          height="300"
          frameBorder="0"
          src={currentLink2}
          allowFullScreen
        ></iframe>
        <iframe
          width="500"
          height="300"
          frameBorder="0"
          src={currentLink3}
          allowFullScreen
        ></iframe>
        <iframe
          width="500"
          height="300"
          frameBorder="0"
          src={currentLink4}
          allowFullScreen
        ></iframe>
        <button
          onClick={changeLink}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Schimbă link-ul
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
