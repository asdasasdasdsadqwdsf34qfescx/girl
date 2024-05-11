export const ainaschavell = [
  {
    src: "https://mega.nz/embed/" + "KF92yLDA#ZsQQrakYmlAMto8eiR2aDqZy3txX55A1ihSKbXHJbbE",
  },
  {
    src: "https://mega.nz/embed/" + "bVcxwCCZ#KxqKSVdEiRjpGPKM3Eej2zMqgdJyQdJcpGEoiwCzD80",
  },
  {
    src: "https://mega.nz/embed/" + "GIMVEQpA#qTi9FQDdkJpAy5RsheE8EmcbiLCDdWIV6kK-nLF5hZ8",
  },
  {
    src: "https://mega.nz/embed/" + "WU8ThDaY#p7evUcF1PAGiDIzCnwZK7wmjaxu4QWSElegjtDjzsEE",
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
      {ainaschavell.map((video, index) => (
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
