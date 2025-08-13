import React from "react";
import Link from "next/link";
import SearchForm from "./SearchForm";

const NavBar = () => {
  return (
    <nav className="bg-[whitesmoke] sticky top-0 z-20 w-full py-4 border border-black">
      <div className="flex justify-between items-center main-max-width mx-auto padding-x border-2 border-black">
        <Link href="/">
          <h1 className="text-2xl font-extrabold text-gray-900">Shop</h1>
        </Link>

        <div className="max-lg:hidden">
          <SearchForm />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
