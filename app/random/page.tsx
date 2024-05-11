"use client";
import React, { useState } from "react";

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
    "https://mega.nz/embed/WA9C1I6C#qSAK9xseAfNWZapQen6MetZvbR00AP84b7axH2l3K5U",
    "https://mega.nz/embed/CJl1HDDA#IMIlYkQHLf8voj4avjEQrZ4YtDy39s8N_suxG2w16Ks",
    "https://mega.nz/embed/aJMBxB4R#vpj8b_Gp0CWILfphSsE7owGKtwpjYZ9uxuIJMHmolvY",
    "https://mega.nz/embed/DYMU3ZSD#Gx5ktA_AJ0XW549e8gF9hb-kwMHyI0gv2AuJhM2j2BM",
    "https://mega.nz/embed/7MNxBCSA#dVRBzDx-0wvSRPA0LBckS958kGPPEmqfPJbjopiIwgc",
    "https://mega.nz/embed/bRM3gYQL#rJE2VCB0htQB0iRZZ1-HlV6GOBAHG2NZWboB3eqRpu0",
    "https://mega.nz/embed/7FNR2SyT#Elrk6fFjDH-H9sqNYAYxShzY8Qp5q2-zccOtPFfpoyM",
    "https://mega.nz/embed/nV9WlCDJ#gVlHAdX10YGNJtm03nysGPkK1LJvAqXwhGjFb_cRAqA",
    "https://mega.nz/embed/7dMRRa7K#MRr9cbcu3hqy6va35oG_bdmN5ngNvi1mjxnE8sY_D-o",
    "https://mega.nz/embed/nJ0jCSJQ#I0tHRezPVvhUvoKiKdMPn1jBA9BMvP6Gz8FOudKW8po",
    "https://mega.nz/embed/fZ8i0CwY#7HuIBSljOcIMvPKO9C5Vpebk7ZD5Qu8gG3Y0XxdjeGk",
    "https://mega.nz/embed/jA1VELyY#YmA8tnEXDCDplUluGXNXGuiYuy25iF2fJOyizkFD04s",
    "https://mega.nz/embed/fF1wxRJY#v4CzBq1ysqyYXWrroORzrc1ZktNRB-y1pdg3OSN-Q74",
    "https://mega.nz/embed/KVNnGSTR#gt3BH8d9g3ypa-FcwlSjgFRAhLZjvyfOIWG1fSe5y_Q",
    "https://mega.nz/embed/nZkmwLZZ#qpTKonNuEuC7DK8Ug3yQPwXBARDa7FVC_SIL-6pngf8",
    "https://mega.nz/embed/HB1W3axC#w4DHsxLxix9Wgl2DNb9_fbg5tK7l2b7ODCoA8gG9Hf4",
    "https://mega.nz/embed/vAcQADoQ#s1KJBruxmod7P_uyxNdVcr34TJEkzx5k9psnA0ZNWjQ",
    "https://mega.nz/embed/2Y8GGQBR#dIwSpgv7jfe4AOO3AOUk8MGIde3M5kbSkQWOPSAkJgw",
    "https://mega.nz/embed/uZ8RhIYB#KpDOPLPxSSYdG53ogza-B8D7_MDSun-5vlNK5RfgOus",
    "https://mega.nz/embed/rNVlHCwY#vH9kVCvYoT0AH3xkti4YwTyHmae_RmXxhbq16ca9bdg",
    "https://mega.nz/embed/DA1SGS7K#03jEXrBnNG3t7b50pLBTsRpsb8ho0bdQ8UwF3FTlKdk",
    "https://mega.nz/embed/3MNhybjB#0HmxDj5CBdG6gqs7K7YEWt0WpXTmiLRHRCOOfnd27fA",
    "https://mega.nz/embed/XZVjUYhK#JBKCG75-ic1QeQ4r0eofA6csTY5yfFKIpNjpNZbGUno",
    "https://mega.nz/embed/zNUB2Bpb#KmJ2cShlppSK7yqGjfgJ50003EKxnoHVMZ1HGbqG8VE",
    "https://mega.nz/embed/ndthzZQZ#LcqMvnN0SbyUeEo-thZ-QCieIMlGW9vo2s1o2NueD-8",
    "https://mega.nz/embed/rckjgZqC#UUJUfP3QCZhCpeqp2lX53MlZTmnvQCC6FREYj8bRyvM",
    "https://mega.nz/embed/qQkWXR5R#1JRor8JxNVBM8KSuC1JCqDz-cW-lbPmTffNG41Gy6Ng",
    "https://mega.nz/embed/" +
      "7IcUmSRI#Kgfu7ktAobigMKAI74yPiIeEoBSCKsI_vMInXP8dYHY",
    "https://mega.nz/embed/" +
      "iNtC1bxI#-HW2TPRSMehbdeKIHATw1jY67FdKYtofUtsiTWjSqMU",

    "https://mega.nz/embed/" +
      "mNMCQTqY#k0PAZsHwB5w6JI7P6F1DxSjhNUprVfRqCvHgzxYrTsg",

    "https://mega.nz/embed/" +
      "Ld80Sb5Q#xdnOjYTz_udzRKHeBwe1Kf8OPoU_g0Ibfgpb6-_heGg",

    // Adaugă aici alte link-uri
  ];

  // Starea pentru link-ul curent
  const [currentLink, setCurrentLink] = useState(availableLinks[0]);
  const [currentLink2, setCurrentLink2] = useState(availableLinks[0]); // Pornim cu primul link din listă
  const [currentLink3, setCurrentLink3] = useState(availableLinks[0]);
  const [currentLink4, setCurrentLink4] = useState(availableLinks[0]);

  // Funcție pentru a schimba link-ul curent la unul random din listă
  const changeLink = () => {
    const randomIndex = Math.floor(Math.random() * availableLinks.length);
    const randomIndex2 = Math.floor(Math.random() * availableLinks.length);
    setCurrentLink(availableLinks[randomIndex]);
    setCurrentLink2(availableLinks[randomIndex2]);
    const randomIndex3 = Math.floor(Math.random() * availableLinks.length);
    const randomIndex4 = Math.floor(Math.random() * availableLinks.length);
    setCurrentLink3(availableLinks[randomIndex3]);
    setCurrentLink4(availableLinks[randomIndex4]);
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
