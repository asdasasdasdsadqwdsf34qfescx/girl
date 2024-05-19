"use client";
import React, { useState } from "react";
import { availableLinks } from "../util/modelList";

const MyComponent = () => {
 
  // Sarea pentru link-ul curent
  const [currentLink, setCurrentLink] = useState(availableLinks[0].src);
  const [currentLink2, setCurrentLink2] = useState(availableLinks[0].src); // Pornim cu primul link din listă
  const [currentLink3, setCurrentLink3] = useState(availableLinks[0].src);
  const [currentLink4, setCurrentLink4] = useState(availableLinks[0].src);

  // Funcție pentru a schimba link-ul curent la unul random din listă
  const changeLink1 = () => {
    const randomIndex = Math.floor(Math.random() * availableLinks.length);
    setCurrentLink(availableLinks[randomIndex].src);
  };
  const changeLink2 = () => {
    const randomIndex2 = Math.floor(Math.random() * availableLinks.length);
    setCurrentLink2(availableLinks[randomIndex2].src);
  };
  const changeLink3 = () => {
    const randomIndex3 = Math.floor(Math.random() * availableLinks.length);
    setCurrentLink3(availableLinks[randomIndex3].src);
  };
  const changeLink4 = () => {
    const randomIndex4 = Math.floor(Math.random() * availableLinks.length);
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
       <div>
        <iframe
          width="500"
          height="300"
          frameBorder="0"
          src={currentLink}
          allowFullScreen
        ></iframe>
         <button
          onClick={changeLink1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Schimbă link-ul
        </button>
        </div>
        <div>
        <iframe
          width="500"
          height="300"
          frameBorder="0"
          src={currentLink2}
          allowFullScreen
        ></iframe>
         <button
          onClick={changeLink2}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Schimbă link-ul
        </button>
        </div>
        <div>
        <iframe
          width="500"
          height="300"
          frameBorder="0"
          src={currentLink3}
          allowFullScreen
        ></iframe>
         <button
          onClick={changeLink3}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Schimbă link-ul
        </button>
        </div>
        <div>
        <iframe
          width="500"
          height="300"
          frameBorder="0"
          src={currentLink4}
          allowFullScreen
        ></iframe>
         <button
          onClick={changeLink4}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Schimbă link-ul
        </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
