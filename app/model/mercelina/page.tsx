export const mercelina = [
  {
    src:
      "https://mega.nz/embed/" +
      "7dMRRa7K#MRr9cbcu3hqy6va35oG_bdmN5ngNvi1mjxnE8sY_D-o",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "nJ0jCSJQ#I0tHRezPVvhUvoKiKdMPn1jBA9BMvP6Gz8FOudKW8po",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "fZ8i0CwY#7HuIBSljOcIMvPKO9C5Vpebk7ZD5Qu8gG3Y0XxdjeGk",
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
      {mercelina.map((video, index) => (
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
