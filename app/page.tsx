import Link from 'next/link';

const models = [
  { name: "alala", imgSrc: "/_alala_.png" },
  { name: "maksim", imgSrc: "/_maksimi_.png" },
  { name: "mercelina", imgSrc: "/_mercelina_.png" },
  { name: "lovelyen", imgSrc: "/_lovelyen.png" },
  { name: "o0o", imgSrc: "/_o0o__.png" },
  { name: "witch", imgSrc: "/_witch__.png" },
  { name: "8a8ytip", imgSrc: "/8a8ytip.png"},
  { name: "aarilaviee", imgSrc: "/aarilaviee.png"},
  { name: "acemorton", imgSrc: "/ace_morton.png"},
  { name: "ainaschavell", imgSrc: "/ainaschavell.png"},
  { name: "aio_lovee", imgSrc: "/aio_lovee.png"},
  { name: "akaikoneko", imgSrc: "/akai_koneko.png"},
  { name: "alicebels", imgSrc: "/alicebels.png"},

  { name: "allotropp", imgSrc: "/allotropp.png"},


];

const MyComponent = () => {
  return (
    <div className="flex flex-wrap">
      {models.map((model, index) => (
        <Link key={index} href={`/model/${model.name}`} passHref>
          <img
            src={model.imgSrc}
            alt="Model Image"
            className="w-40 h-auto m-4"
          />
        </Link>
      ))}
    </div>
  );
};

export default MyComponent;
