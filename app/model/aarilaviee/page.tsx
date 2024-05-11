 const aarilaviee = [
  {
    src:
      "https://mega.nz/embed/" +
      "6RdlHRqZ#xpfBvN2-ZnLyf9YHqinvmffPGJ_9PI0C588EASzeCqo",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "uI0S1JoC#yxGYgcTfAQ8XdfJ7rQJ-i2YdiraJ8hMgtpHu1PW928E",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "uN9zzDrD#B6T1up36Brbh9kfT532sZl_pse-y6OYKxa0CVKw58i0",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "zQ13kSib#6S7LofMjTGJIaIOrDRNGg4jbmfy-eUuPpyoTPqZQB38",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "mAtgFA5J#zw9nsmPwezkUoIxz65jeUXCg0lgYnj2UCYSNdMoLZBU",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "CQ0gSISA#ly6ARenrzonMW6zwVacpZ4ZvyoBVfhCgQv1LyFyaz7g",
  },
  {
    src:
      "https://mega.nz/embed/" +
      "vdcXAKpS#P1KxS3UKqEzAZQG_ogiHOpIu0vEMlghbLiI_-VM5pos",
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
      {aarilaviee.map((video, index) => (
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
