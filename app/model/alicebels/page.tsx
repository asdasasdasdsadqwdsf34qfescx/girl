export const alicebels = [
  {
    src:
      "https://mega.nz/embed/" +
      "CIMC0ZpA#PmLJQ20Owr37zs9_hZM33mcuVEH_gxnKgruEIQJ8uks",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "WdNQzA4R#MnP1_Ixbo7yK1cnTtugguQTWrfOTwBqjgg1gyfKCPGo",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "WZdDlYYD#UHgi17YWvZp2BvXRiXsKnDNcKyA_V8E8eo4aWNyiff8",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "CMEDFDJB#wYhdkADafHHU-FizKRl-ovfq7QgtuY4B7kVMX5SZEtI",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "HBE1Ta7K#rDhFHy6gX-LLY4exkF_3gV89A4KL1DyFK5forZfqxSo",
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
      {alicebels.map((video, index) => (
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
