export const aio_lovee = [
  {
    src:
      "https://mega.nz/embed/" +
      "HM1HSABB#I6rI6lgyVz31vq0aeeWP7QbuTJGYjgDaQP-W78NXB9Q",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "SdVVnQpY#zM5fL692cmbcMnmTSGtMKc0nZA65F6NSyJQUcjdAkmw",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "3ZcnxKgQ#DpwArcwvEyXlyk1N6BUGo5-pnBmjCnZtaHPdU9Siwls",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "yR0WGIjZ#wwDgOp_b0BHeOLwCoP3FvRegfyQUKlG4YhCCvc4VMyI",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "DN92XTTD#pXlG5a-ml80poTTDSakihccyobkZx8s9T8EzNFyFrlo",
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
      {aio_lovee.map((video, index) => (
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
