export const alala = [
  {
    src: "https://mega.nz/embed/" + "PAt1nS4D#SljrWsDwZvaV6QchsYnijdErtGsSVUqQKdA-VevrLwk",
  },
  {
    src: "https://mega.nz/embed/" + "fUl1XaSR#-U6y1GqAVNfjAJ9Zid6WoBIhA2svWXEkOkBgDqhfgJ0",
  },
  {
    src: "https://mega.nz/embed/" + "CN9mlYAZ#EKP2Tm0swJZ8zweJrwYWFLCgsit1l2KGfTFhbXPRpaM",
  },
  {
    src: "https://mega.nz/embed/" + "TUFEmajS#PRnOOMURt4j2YUrdfwrizOox8H8iTyw5ltQN47dSMjY",
  },
  {
    src: "https://mega.nz/embed/" + "iZMh0CDR#ixpVKLLrX1QErJZvGDUZwNrI0nDixvUsoBYGNBRZygY",
  },
  {
    src: "https://mega.nz/embed/" + "PV9DiBBb#vzEMAw2-9dQyWgAfqrXrUH5f1YIK0YvsL3jI95lPh8Q",
  },
  {
    src: "https://mega.nz/embed/" + "2R0gyCKa#HpKDikCmu7KVNQ0ja9WAIUd-HzhqT_AyTm5ztyIrN50",
  },
  {
    src: "https://mega.nz/embed/" + "rQNRFBCJ#Z54HNWb87_E-9PUZCb31OD4b12wMgfOEPE4qbsC8ZV8",
  },
  {
    src: "https://mega.nz/embed/" + "yBNQARzZ#0PafYB9ZiFtcVAYYR9_GL9DXMlIPG8AsJmEeLIdQD9s",
  },
  {
    src: "https://mega.nz/embed/" + "nEt1UaID#hRAmKlxAWbB7V5Vs8kp8edjHznBABX4qRm6Sc7C_n9Y",
  },
  {
    src: "https://mega.nz/embed/" + "acUhlTJT#Z1rxAEpRWynxvyx5LoLMCrwy3LPl7nF4kps-bjnJ6UY",
  },
];

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {alala.map((video, index) => (
        <iframe
          key={index}
          width="640"
          height="360"
          frameBorder="0"
          src={video.src}
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}
