export const lovelyen = [
  {
    src:
      "https://mega.nz/embed/" +
      "jA1VELyY#YmA8tnEXDCDplUluGXNXGuiYuy25iF2fJOyizkFD04s",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "fF1wxRJY#v4CzBq1ysqyYXWrroORzrc1ZktNRB-y1pdg3OSN-Q74",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "KVNnGSTR#gt3BH8d9g3ypa-FcwlSjgFRAhLZjvyfOIWG1fSe5y_Q",
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
      {lovelyen.map((video, index) => (
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
