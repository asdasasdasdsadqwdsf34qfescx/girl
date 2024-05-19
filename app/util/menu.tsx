import Link from "next/link";

const MenuBar = () => {
    return (
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50">
        <nav className="flex justify-around">
          <Link href="/random" passHref>
          Random
          </Link>
        
        </nav>
      </div>
    );
  };

  export default MenuBar