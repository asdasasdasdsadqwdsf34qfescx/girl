"use client"
import React, { useState } from 'react';

const MyComponent = () => {
  // Lista de link-uri disponibile
  const availableLinks = [
    "https://mega.nz/embed/PAt1nS4D#SljrWsDwZvaV6QchsYnijdErtGsSVUqQKdA-VevrLwk",
    "https://mega.nz/embed/fUl1XaSR#-U6y1GqAVNfjAJ9Zid6WoBIhA2svWXEkOkBgDqhfgJ0",
    "https://mega.nz/embed/CN9mlYAZ#EKP2Tm0swJZ8zweJrwYWFLCgsit1l2KGfTFhbXPRpaM",
    "https://mega.nz/embed/TUFEmajS#PRnOOMURt4j2YUrdfwrizOox8H8iTyw5ltQN47dSMjY",
    "https://mega.nz/embed/iZMh0CDR#ixpVKLLrX1QErJZvGDUZwNrI0nDixvUsoBYGNBRZygY",
    "https://mega.nz/embed/PV9DiBBb#vzEMAw2-9dQyWgAfqrXrUH5f1YIK0YvsL3jI95lPh8Q",
    "https://mega.nz/embed/2R0gyCKa#HpKDikCmu7KVNQ0ja9WAIUd-HzhqT_AyTm5ztyIrN50",
    "https://mega.nz/embed/rQNRFBCJ#Z54HNWb87_E-9PUZCb31OD4b12wMgfOEPE4qbsC8ZV8",
    "https://mega.nz/embed/yBNQARzZ#0PafYB9ZiFtcVAYYR9_GL9DXMlIPG8AsJmEeLIdQD9s",
    "https://mega.nz/embed/nEt1UaID#hRAmKlxAWbB7V5Vs8kp8edjHznBABX4qRm6Sc7C_n9Y",
    "https://mega.nz/embed/acUhlTJT#Z1rxAEpRWynxvyx5LoLMCrwy3LPl7nF4kps-bjnJ6UY",
    
    // Adaugă aici alte link-uri
  ];

  // Starea pentru link-ul curent
  const [currentLink, setCurrentLink] = useState(availableLinks[0]); // Pornim cu primul link din listă

  // Funcție pentru a schimba link-ul curent la unul random din listă
  const changeLink = () => {
    const randomIndex = Math.floor(Math.random() * availableLinks.length);
    setCurrentLink(availableLinks[randomIndex]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <iframe width="640" height="360" frameBorder="0" src={currentLink} allowFullScreen ></iframe>
        <button onClick={changeLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Schimbă link-ul</button>
      </div>
    </div>
  );
};

export default MyComponent;
