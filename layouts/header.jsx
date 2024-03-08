import Image from "next/image";
import Link from "next/link";
import React from "react";
// assets imports : images
import samplex_logo_colored from "../assets/images/samplex_logo_colored.png";
// assets imports : icons
// assets imports : css
import "../assets/css/samplex.css";

function SamplexHeader() {
  return (
    <div className="z-50 flex flex-row justify-between items-center w-full px-14 py-4 shadow-md">
      <Link href={"/"}>
        <Image
          src={samplex_logo_colored}
          alt="Samplex logo"
          width={100}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        ></Image>
      </Link>

      <div className="flex justify-around items-center gap-x-4 font-[SamsungOneB]">
        <Link href={"about"} className="">
          About
        </Link>
        <Link href={"services"} className="">
          Services
        </Link>
        <Link href={"portfolio"} className="">
          Portfolio
        </Link>
        <Link href={"blog"} className="">
          Blog
        </Link>
        <Link href={"contacts"} className="">
          Contacts
        </Link>
        <Link href={"community"} className="">
          Community
        </Link>
        <Link
          href={"new-quote"}
          className="px-4 py-2 rounded-md bg-[#1288DC] text-white"
        >
          Need a Quote
        </Link>
      </div>
    </div>
  );
}

export default SamplexHeader;
