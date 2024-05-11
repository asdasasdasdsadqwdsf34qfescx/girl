export const allotropp = [
  {
    src:
      "https://mega.nz/embed/" +
      "CY1SHRhD#vaeb9TiekRPn2LaC7znuTBk5ZLXEw7LEoLxkwiBgphc",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "addTjb6L#XAe_757G4QZQ7YtsxiKIhbF8n3V2pZsNwz7d3p68zqk",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "LJUVgYLL#ocBD0_il5mgDL3pxdvwz9wZleuEBBj6reN8kI93PomM",
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
      {allotropp.map((video, index) => (
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
