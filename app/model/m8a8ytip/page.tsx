export const m8a8ytip = [
  {
    src: "https://mega.nz/embed/qQkWXR5R#1JRor8JxNVBM8KSuC1JCqDz-cW-lbPmTffNG41Gy6Ng",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "7IcUmSRI#Kgfu7ktAobigMKAI74yPiIeEoBSCKsI_vMInXP8dYHY",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "iNtC1bxI#-HW2TPRSMehbdeKIHATw1jY67FdKYtofUtsiTWjSqMU",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "mNMCQTqY#k0PAZsHwB5w6JI7P6F1DxSjhNUprVfRqCvHgzxYrTsg",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "Ld80Sb5Q#xdnOjYTz_udzRKHeBwe1Kf8OPoU_g0Ibfgpb6-_heGg",
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
      {m8a8ytip.map((video, index) => (
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
