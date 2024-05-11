import Link from 'next/link';

const models = [
  { name: "alala", imgSrc: "/_alala_.png" },
  { name: "maksim", imgSrc: "/_maksimi_.png" },
  { name: "mercelina", imgSrc: "/_mercelina_.png" },
  { name: "lovelyen", imgSrc: "/_lovelyen.png" },
  { name: "o0o", imgSrc: "/_o0o__.png" },
  { name: "witch", imgSrc: "/_witch__.png" },
  { name: "8a8ytip", imgSrc: "/8a8ytip.png"}
];

const MyComponent = () => {
  return (
    <div className="flex flex-wrap">
      {models.map((model, index) => (
        <Link key={index} href={`/model/${model.name}`} passHref>
          <img
            src={model.imgSrc}
            alt="Model Image"
            className="w-48 h-auto m-2"
          />
        </Link>
      ))}
    </div>
  );
};

export default MyComponent;
