
import Link from "next/link";

const Header2 = () => {
  return (
    <div className="h-16 bg-blue-800 text-white" >
      <div className="w-full h-full flex px-10">
        <div className="w-1/2 h-full flex items-center">
        <Link  href="/">
          <span className="font-semibold text-2xl">My Travel Companion</span>
        </Link>
        </div>
        <div className="w-1/2 h-full flex justify-end gap-5 items-center">
            <Link className="text-lg font-semibold hover:text-gray-300 w-20" href="/">
              Home
            </Link>
            <Link className="text-lg font-semibold hover:text-gray-300 w-20" href="/login">
              Login
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header2;
