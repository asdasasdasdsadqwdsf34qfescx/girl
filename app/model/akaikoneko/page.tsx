export const akaikoneko = [
  {
    src: "https://mega.nz/embed/" + "XEkClahL#pxYx3FEmqRr5pp9jemb_PJOejiSw8hX-pw2DU_D5iCE",
  },
  {
    src: "https://mega.nz/embed/" + "TQ1hERZZ#3Cpfet7tkhPJAC9WjPIYa_hOvZ7Onm05AzI-9g8Asq8",
  },
  {
    src: "https://mega.nz/embed/" + "GQFQUJrZ#P4OZ5xr4CBu5-88QoFzVBDNYgHtY2vqFag5LRHGqc7w",
  },
  {
    src: "https://mega.nz/embed/" + "DYsHyJxb#rQW9XJ87D5nCeB8uCrdrVhbL02zc2TrvriIPPyV6hvI",
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
      {akaikoneko.map((video, index) => (
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
