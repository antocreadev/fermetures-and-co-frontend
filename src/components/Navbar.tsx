import { MenuIcon, ShoppingBagIcon, UserCircleIcon } from "lucide-react";
import GlobalSearchInput from "./GlobalSearchInput";

const Navbar = () => {
  return (
    <nav className="flex flex-col px-5 py-3">
      <div className="flex justify-between items-center py-2">
        <div className="flex flex-row gap-2 items-center">
          <button className="p-1 rounded-sm hover:bg-gray-100">
            <MenuIcon size={28} strokeWidth={1} />
          </button>

          <h1 className="header uppercase">Fermetures & Co</h1>
        </div>

        <div className="hidden md:flex w-1/3">
          <GlobalSearchInput />
        </div>

        <div className="flex flex-row gap-4 items-center">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ShoppingBagIcon size={24} strokeWidth={1} />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <UserCircleIcon size={24} strokeWidth={1} />
          </button>
        </div>
      </div>

      <div className="flex justify-stretch">
        <div className="flex md:hidden w-full">
          <GlobalSearchInput />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
