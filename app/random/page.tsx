"use client";
import React, { useState } from "react";
import { akaikoneko } from "../model/akaikoneko/page";
import { m8a8ytip } from "../model/m8a8ytip/page";
import { aarilaviee } from "../model/aarilaviee/page";
import { acemorton } from "../model/acemorton/page";
import { ainaschavell } from "../model/ainaschavell/page";
import { aio_lovee } from "../model/aio_lovee/page";
import { alala } from "../model/alala/page";
import { lovelyen } from "../model/lovelyen/page";
import { maksim } from "../model/maksim/page";
import { mercelina } from "../model/mercelina/page";
import { o0o } from "../model/o0o/page";
import { witch } from "../model/witch/page";
import { alicebels } from "../model/alicebels/page";
import { allotropp } from "../model/allotropp/page";

const MyComponent = () => {

  const availableLinks = [
    ...akaikoneko,
    ...m8a8ytip,
    ...aarilaviee,
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
