import Link from 'next/link';

const MyComponent = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>

      <Link href="/model/alala" passHref>
        <img src="/_alala_.png" alt="Model Image" width="300" style={{ margin: '5px' }} />
      </Link>
      <Link href="/model/alala" passHref>
        <img src="/_lilyfox.png" alt="Model Image" width="300" style={{ margin: '5px' }} />
      </Link>
      <Link href="/model/alala" passHref>
        <img src="/_alala_.png" alt="Model Image" width="300" style={{ margin: '5px' }} />
      </Link>
      <Link href="/model/alala" passHref>
        <img src="/_alala_.png" alt="Model Image" width="300" style={{ margin: '5px' }} />
      </Link>
      <Link href="/model/alala" passHref>
        <img src="/_alala_.png" alt="Model Image" width="300" style={{ margin: '5px' }} />
      </Link>
      <Link href="/model/alala" passHref>
        <img src="/_alala_.png" alt="Model Image" width="300" style={{ margin: '5px' }} />
      </Link>
    </div>
  );
};

export default MyComponent;

