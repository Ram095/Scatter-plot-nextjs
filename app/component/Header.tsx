import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black flex justify-start items-center">
      <div className="ml-6 pt-3">
        <Image
          src="/Devon.png"
          alt="DevOn Logo"
          width={140}
          height={20}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
