const videos = [
  {
    src: "https://mega.nz/embed/rNVlHCwY#vH9kVCvYoT0AH3xkti4YwTyHmae_RmXxhbq16ca9bdg",
  },
  {
    src: "https://mega.nz/embed/DA1SGS7K#03jEXrBnNG3t7b50pLBTsRpsb8ho0bdQ8UwF3FTlKdk",
  },
  {
    src: "https://mega.nz/embed/3MNhybjB#0HmxDj5CBdG6gqs7K7YEWt0WpXTmiLRHRCOOfnd27fA",
  },
  {
    src: "https://mega.nz/embed/XZVjUYhK#JBKCG75-ic1QeQ4r0eofA6csTY5yfFKIpNjpNZbGUno",
  },
  {
    src: "https://mega.nz/embed/zNUB2Bpb#KmJ2cShlppSK7yqGjfgJ50003EKxnoHVMZ1HGbqG8VE",
  },
  {
    src: "https://mega.nz/embed/ndthzZQZ#LcqMvnN0SbyUeEo-thZ-QCieIMlGW9vo2s1o2NueD-8",
  },
  {
    src: "https://mega.nz/embed/rckjgZqC#UUJUfP3QCZhCpeqp2lX53MlZTmnvQCC6FREYj8bRyvM",
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
      {videos.map((video, index) => (
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
