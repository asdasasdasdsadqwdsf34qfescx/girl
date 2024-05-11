export const acemorton = [
  {
    src:
      "https://mega.nz/embed/" +
      "bENhkajK#OEozVmStlUQ6dGXvKu9OGMhfbqo9XBjiR4cwdIXZ3nE",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "iU1RzLzJ#NGd2AVqtR7BR6qeF0C5nCKmJW4lqfi9CpQZZAQtthvQ",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "PNszULTS#0DkuaWZ_34FijV0WT_sm_4E6nS6aqFUx0kkT-i9Y7h0",
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
      {acemorton.map((video, index) => (
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
