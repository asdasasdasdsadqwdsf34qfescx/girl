
export const o0o = [
  {
    src: "https://mega.nz/embed/nZkmwLZZ#qpTKonNuEuC7DK8Ug3yQPwXBARDa7FVC_SIL-6pngf8",
  },
  {
    src: "https://mega.nz/embed/HB1W3axC#w4DHsxLxix9Wgl2DNb9_fbg5tK7l2b7ODCoA8gG9Hf4",
  },
  {
    src: "https://mega.nz/embed/vAcQADoQ#s1KJBruxmod7P_uyxNdVcr34TJEkzx5k9psnA0ZNWjQ",
  },
  {
    src: "https://mega.nz/embed/2Y8GGQBR#dIwSpgv7jfe4AOO3AOUk8MGIde3M5kbSkQWOPSAkJgw",
  },
  {
    src: "https://mega.nz/embed/uZ8RhIYB#KpDOPLPxSSYdG53ogza-B8D7_MDSun-5vlNK5RfgOus",
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
      {o0o.map((video, index) => (
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
