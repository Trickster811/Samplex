import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ServiceCardBuilder(props) {
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Link
        href={{
          pathname: "register",
          query: { s: props.link },
        }}
        className="relative flex flex-col lg:gap-y-4 w-fit px-6 py-4 rounded-md bg-white"
      >
        <div className="-z-10 absolute -left-1 -bottom-1 w-2/3 h-1/2 rounded-bl-lg bg-black"></div>
        <div className={`lg:w-64 lg:h-64 rounded-lg bg-[${props.color}]`}>
          <Image
            src={props.image}
            alt="Samplex logo"
            //   width={100}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
            className="w-full h-full object-contain"
          ></Image>
        </div>
        <div>{props.title}</div>
      </Link>
    </div>
  );
}
