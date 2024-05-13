import Link from 'next/link';

const models = [
  { name: "alala", imgSrc: "/_alala_.png" },
  { name: "maksim", imgSrc: "/_maksimi_.png" },
  { name: "mercelina", imgSrc: "/_mercelina_.png" },
  { name: "lovelyen", imgSrc: "/_lovelyen.png" },
  { name: "o0o", imgSrc: "/_o0o__.png" },
  { name: "witch", imgSrc: "/_witch__.png" },
  { name: "m8a8ytip", imgSrc: "/8a8ytip.png"},
  { name: "aarilaviee", imgSrc: "/aarilaviee.png"},
  { name: "acemorton", imgSrc: "/ace_morton.png"},
  { name: "ainaschavell", imgSrc: "/ainaschavell.png"},
  { name: "aio_lovee", imgSrc: "/aio_lovee.png"},
  { name: "akaikoneko", imgSrc: "/akai_koneko.png"},
  { name: "alicebels", imgSrc: "/alicebels.png"},
  { name: "allotropp", imgSrc: "/allotropp.png"},
  { name: "amazongirls", imgSrc: "/amazongirls.png"},
  { name: "amelia_star20", imgSrc: "/amelia_star20.png"},
  { name: "amelia_sweetyy", imgSrc: "/amelia_sweetyy.png"},
  { name: "amina_artin", imgSrc: "/amina_artin.png"},
  { name: "anabel054", imgSrc: "/anabel054.png"},
  { name: "angelawalton", imgSrc: "/angelawalton.png"},
  { name: "anita_richh", imgSrc: "/anita_richh.png"},
  { name: "anitarossi__", imgSrc: "/anitarossi__.png"},
  { name: "anni_lovely", imgSrc: "/anni_lovely.png"},
  { name: "annie_shyy", imgSrc: "/annie_shyy.png"},
  { name: "anniehillofficial_", imgSrc: "/anniehillofficial_.png"},
  { name: "ashlyeroberts01", imgSrc: "/ashlyeroberts01.png"},
  { name: "asianangel1", imgSrc: "/asianangel1.png"},
  { name: "babyroxynill", imgSrc: "/babyroxynill.png"},
  { name: "britneycolins", imgSrc: "/britneycolins.png"},
  { name: "bugsbunnyb", imgSrc: "/annie_shyy.png"},
  { name: "caroline_oop1", imgSrc: "/caroline_oop1.png"},
  { name: "carolinefoxxx", imgSrc: "/carolinefoxxx.png"},
  { name: "cherry_tery", imgSrc: "/cherry_tery.png"},
  { name: "chloe_catherine_mykers", imgSrc: "/chloe_catherine_mykers.png"},
  { name: "cielo69", imgSrc: "/cielo69_.png"},
  { name: "cleo_one", imgSrc: "/cleo_one.png"},
  { name: "cosmic_boobs", imgSrc: "/cosmic_boobs.png"},
  { name: "crystalblush", imgSrc: "/crystalblush.png"},
  { name: "cute_caprice", imgSrc: "/cute_caprice.png"},
  { name: "deniseone", imgSrc: "/deniseone.png"},
  { name: "di_huny", imgSrc: "/di_huny.png"},
  { name: "dirtygirls99", imgSrc: "/dirtygirls99.png"},
  { name: "domenikka", imgSrc: "/domenikka.png"},
  { name: "efulia_wood", imgSrc: "/efulia_wood.png"},
  { name: "elizabeth_gray", imgSrc: "/elizabeth_gray.png"},
  { name: "ellie_leen", imgSrc: "/ellie_leen.png"},
  { name: "emily_blush", imgSrc: "/emily_blush.png"},
  { name: "emilyn_keatting", imgSrc: "/emilyn_keatting.png"},
  { name: "emma_lu1", imgSrc: "/emma_lu1.png"},
  { name: "felissiany", imgSrc: "/felissiany.png"},
  { name: "gigisquirty", imgSrc: "/gigisquirty.png"},
  { name: "girl_of_yourdreams", imgSrc: "/girl_of_yourdreams_.png"},
  { name: "golden_bag", imgSrc: "/golden_bag.png"},
  { name: "grase_daves", imgSrc: "/grase_daves.png"},
  { name: "harubunny", imgSrc: "/harubunny.png"},
  { name: "annie_shyy", imgSrc: "/annie_shyy.png"},
  { name: "annie_shyy", imgSrc: "/annie_shyy.png"},
  { name: "annie_shyy", imgSrc: "/annie_shyy.png"},
  { name: "annie_shyy", imgSrc: "/annie_shyy.png"},
  { name: "annie_shyy", imgSrc: "/annie_shyy.png"},
  { name: "annie_shyy", imgSrc: "/annie_shyy.png"},

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
