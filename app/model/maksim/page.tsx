export const maksim = [
  {
    src:
      "https://mega.nz/embed/" +
      "embed/WA9C1I6C#qSAK9xseAfNWZapQen6MetZvbR00AP84b7axH2l3K5U",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "CJl1HDDA#IMIlYkQHLf8voj4avjEQrZ4YtDy39s8N_suxG2w16Ks",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "aJMBxB4R#vpj8b_Gp0CWILfphSsE7owGKtwpjYZ9uxuIJMHmolvY",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "DYMU3ZSD#Gx5ktA_AJ0XW549e8gF9hb-kwMHyI0gv2AuJhM2j2BM",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "7MNxBCSA#dVRBzDx-0wvSRPA0LBckS958kGPPEmqfPJbjopiIwgc",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "bRM3gYQL#rJE2VCB0htQB0iRZZ1-HlV6GOBAHG2NZWboB3eqRpu0",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "7FNR2SyT#Elrk6fFjDH-H9sqNYAYxShzY8Qp5q2-zccOtPFfpoyM",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "nV9WlCDJ#gVlHAdX10YGNJtm03nysGPkK1LJvAqXwhGjFb_cRAqA",
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
      {maksim.map((video, index) => (
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
