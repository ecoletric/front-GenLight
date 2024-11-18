import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={'/'} className="hover:scale-110 transition-all duration-300">
        <div className="flex items-center space-x-2">
          <Image
            src="/energia-renovavel.png"
            alt="simbolo raio"
            height={25}
            width={25}
          ></Image>
          <h2 className="text-xl font-bold text-gray-800">Genlight</h2>
        </div>
    </Link>
  );
};

export default Logo;
