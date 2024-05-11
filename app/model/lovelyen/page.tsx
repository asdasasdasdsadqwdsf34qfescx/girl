import Image from "next/image";
import Link from "next/link";

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
      <iframe
        width="640"
        height="360"
        frameBorder="0"
        src="https://mega.nz/embed/jA1VELyY#YmA8tnEXDCDplUluGXNXGuiYuy25iF2fJOyizkFD04s"
        allowFullScreen
      ></iframe>
      <iframe
        width="640"
        height="360"
        frameBorder="0"
        src="https://mega.nz/embed/fF1wxRJY#v4CzBq1ysqyYXWrroORzrc1ZktNRB-y1pdg3OSN-Q74"
        allowFullScreen
      ></iframe>
      <iframe
        width="640"
        height="360"
        frameBorder="0"
        src="https://mega.nz/embed/KVNnGSTR#gt3BH8d9g3ypa-FcwlSjgFRAhLZjvyfOIWG1fSe5y_Q"
        allowFullScreen
      ></iframe>
    </div>
  );
}
