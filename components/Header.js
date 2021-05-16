import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      <div className="flex items-center">
        <Image
          src="/f_logo_RGB-Blue_72.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full">
          <SearchIcon className="h-6" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div>
        <h1>middle</h1>
      </div>
      <div>
        <h1>right</h1>
      </div>
    </div>
  );
}

export default Header;
