import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { SearchIcon } from "@heroicons/react/outline";
import {
  BellIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  ChatIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <div
      className="sticky top-0 z-50 bg-white flex
    items-center p-2 lg:px-5 shadow-md"
    >
      <div className="flex items-center">
        <Image
          src="/f_logo_RGB-Blue_72.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          className="rounded-full"
          src="http://placekitten.com/200/300"
          width="50"
          height="50"
        ></Image>
        <p className="whitespace-nowrap font-semibold pr-3">User Name</p>
        <ViewGridAddIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
