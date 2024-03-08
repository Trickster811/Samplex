import React from "react";
import Image from "next/image";
import { Star } from "react-feather";

// Testimonial item Builder
export function TestimonialBuilder(props) {
  return (
    <div className="relative flex flex-col gap-y-4 lg:w-80 p-4 rounded-lg border-2 border-black">
      <div className="absolute -left-14 -top-14 p-4 bg-white">
        <Image
          src={props.profilePic}
          alt="profile_pic"
          // width={100}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
          className="object-cover w-20 h-20 rounded-lg"
        ></Image>
      </div>

      <div className="absolute -right-6 -bottom-6 w-16 h-16 rounded-lg bg-white"></div>
      <p className="ml-10 text-xl text-balance font-[SamsungOneB]">
        {props.username}
      </p>
      <p>{props.comment}</p>
      <div className="w-1/3 h-px bg-black"></div>
      <div className="flex gap-x-4">
        <Star size={20} color="#FFB92D"/>
        <Star size={20} color="#FFB92D" />
        <Star size={20} color="#FFB92D" />
        <Star size={20} color="#FFB92D" />
        <Star size={20} />
      </div>
    </div>
  );
}

// `How we proceed` item Builder
export function HowWeProceedZoneBuilder(props) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative w-fit">
        <div className="w-fit p-1.5 rounded-lg bg-white">
          <div className="flex flex-grow-0 justify-center items-center w-20 h-20 rounded-lg bg-[#1288DC] text-5xl text-white font-[SamsungOneB]">
            {props.number}
          </div>
        </div>
        <div className="-z-10 absolute -left-0.5 -bottom-0.5 w-14 h-16 rounded-bl-lg bg-black"></div>
      </div>

      <p className="text-balance">{props.content}</p>
    </div>
  );
}
