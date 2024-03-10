import React from "react";
import Image from "next/image";
import Link from "next/link";
import SamplexHeader from "../layouts/header";
import SamplexFooter from "../layouts/footer";
import {
  HowWeProceedZoneBuilder,
  TestimonialBuilder,
} from "../components/index.component";
// assets imports : images
import samplex_logo_light from "../assets/images/samplex_logo_light.png";
import hero_image from "../assets/images/Hero-image.png";
import service_mobile from "../assets/images/service_mobile.png";
import service_ux_design from "../assets/images/service_ux_design.png";
import service_branding from "../assets/images/service_branding.png";
import service_website from "../assets/images/service_website.png";
import partners from "../assets/images/partners.png";
import julie_queen from "../assets/images/girl_studying_with_music.png";
// assets imports : icons
import { Facebook, GitHub, Linkedin, Twitter } from "react-feather";
// assets imports : css
import "../assets/css/samplex.css";

function SamplexStartPage() {
  return (
    <div className="font-[SamsungOne]">
      {/* Samplex Home Page Header */}
      <SamplexHeader />
      {/* Samplex Home Page Main Content */}
      <div className="flex flex-col items-center w-full px-14 py-8 scrollbar">
        {/* Hero Zone */}
        <div className="relative w-full mb-20 font-[SamsungOneB]">
          <div className="flex flex-col gap-y-6 w-2/3">
            <div>
              <p className="text-6xl">
                Smart <strong className="text-[#1288DC]">Solutions</strong> and
                Beautiful <strong className="text-[#FFB92D]">Design</strong> for
                your
              </p>
              <div className="relative w-fit mt-2 mb-8">
                <div className="-z-20 absolute -right-3 -bottom-2 w-full px-4 py-2 border-2 border-black text-6xl text-transparent origin-center rotate-6">
                  l
                </div>
                <div className="-z-10 absolute w-full px-4 py-2 bg-[#FFB92D] text-6xl text-transparent origin-center rotate-6">
                  l
                </div>
                <div className="px-4 py-2 text-6xl text-white">Business</div>
              </div>
            </div>
            <p className="text-balance">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
            <Link href={"new-quote"} className="relative w-fit">
              <div className="w-fit p-1.5 rounded-lg bg-white">
                <div className="flex flex-grow-0 justify-center items-center px-10 py-2 rounded-md bg-[#1288DC] text-lg text-white font-[SamsungOneB]">
                  Need a quote &nbsp;&nbsp; -&gt;
                </div>
              </div>
              <div className="-z-10 absolute -left-0.5 -bottom-0.5 w-2/5 h-8 rounded-bl-lg bg-black"></div>
            </Link>
          </div>
          <div>
            <Image
              src={hero_image}
              alt="hero image"
              // width={100}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
              className="absolute -top-40 -right-14 w-2/3"
            ></Image>
          </div>
        </div>
        {/* `What we do` Zone */}
        <div className="w-full mt-40 mb-20">
          {/* `What we do` Zone [ 1st Line ] */}
          <p className="text-[#FFB92D]">What we do</p>
          <div className="grid grid-cols-2 justify-between mb-20">
            <p className="text-3xl text-balance font-[SamsungOneB]">
              Grow your Business with smooth design and smart application
            </p>
            <p className="text-balance text-justify">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
          {/* `What we do` Zone [ 2nd Line ] */}
          <div className="grid grid-cols-3 gap-6">
            {/* `What we do` Zone [ 2nd Line ] [ 1st Column ] */}
            <div className="col-span-2 flex flex-col gap-6">
              {/* `What we do` Zone [ 2nd Line ] [ 1st Column ] [ 1st Line ] */}
              <div className="grid grid-cols-3 content-end w-full h-1/2 rounded-lg bg-[#1288DC]">
                <div className="relative col-auto flex justify-center items-center w-full h-full">
                  <Image
                    src={service_mobile}
                    alt="mobile Development Service"
                    // width={100}
                    blurDataURL="data:..."
                    placeholder="blur"
                    className="absolute object-cover h-full"
                  ></Image>
                </div>
                <div className="col-span-2 flex flex-col justify-end gap-y-4 p-6">
                  <p className="text-4xl text-white text-balance font-[SamsungOneB]">
                    Mobile development
                  </p>
                  <p className=" text-white">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour
                  </p>
                  <Link
                    href={"#"}
                    className="flex justify-end text-md text-white hover:underline font-[SamsungOneB]"
                  >
                    More about -&gt;
                  </Link>
                </div>
              </div>
              {/* `What we do` Zone [ 2nd Line ] [ 1st Column ] [ 2nd Line ] */}
              <div className="flex gap-6 w-full h-1/2">
                {/* `What we do` Zone [ 2nd Line ] [ 1st Column ] [ 2nd Line ] [1st Column] */}
                <div className="flex flex-col w-1/2 rounded-lg bg-zinc-800">
                  <div className="col-span-2 flex flex-col justify-between px-4 pt-4">
                    <div className="grid grid-cols-2 content-start">
                      <p className="text-4xl text-white font-[SamsungOneB]">
                        UX Design
                      </p>
                      <p className="text-balance text-white">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority
                      </p>
                    </div>
                  </div>
                  <div className="col-auto flex justify-between items-end w-full h-full">
                    <div className="w-3/5 h-full">
                      <Image
                        src={service_ux_design}
                        alt="UX Design Service"
                        // width={100}
                        blurDataURL="data:..."
                        placeholder="blur" // Optional blur-up while loading
                        className="object-contain rounded-bl-lg"
                      ></Image>
                    </div>
                    <Link
                      href={"#"}
                      className="flex justify-end p-4 text-md text-white hover:underline font-[SamsungOneB]"
                    >
                      More about -&gt;
                    </Link>
                  </div>
                </div>
                {/* `What we do` Zone [ 2nd Line ] [ 1st Column ] [ 2nd Line ] [2nd Column] */}
                <div className="flex w-1/2 rounded-lg bg-[#DBDBDB]">
                  <Image
                    src={service_branding}
                    alt="Branding Service"
                    blurDataURL="data:..."
                    placeholder="blur" // Optional blur-up while loading
                    className="object-cover w-3/5 h-full -mr-14"
                  ></Image>
                  <div className="flex flex-col justify-between py-4 pr-4">
                    <div>
                      <p className="text-4xl text-white text-balance font-[SamsungOneB]">
                        Branding
                      </p>
                      <p className=" text-white">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority
                      </p>
                    </div>

                    <Link
                      href={"#"}
                      className="flex justify-end text-md text-white hover:underline font-[SamsungOneB]"
                    >
                      More about -&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* `What we do` Zone [ 2nd Line ] [ 2nd Column ] */}
            <div className="col-auto flex flex-col gap-y-4 h-[70vh] rounded-lg bg-[#FFB92D]">
              <div className="px-8 pt-14">
                <p className="text-4xl text-white text-balance font-[SamsungOneB]">
                  Web and Desktop development
                </p>
                <p className="text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
                <Link
                  href={"#"}
                  className="flex justify-end text-md text-white hover:underline font-[SamsungOneB]"
                >
                  More about -&gt;
                </Link>
              </div>

              <Image
                src={service_website}
                alt="Web and Desktop Development"
                // width={100}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
                className="h-full -mt-10"
              ></Image>
            </div>
          </div>
        </div>
        {/* `How we proceed` Zone */}
        <div className="flex gap-x-10 w-full mb-20">
          {/* `How we proceed` Zone [ 1st Column ] */}
          <div className="flex flex-col gap-y-8 w-1/3">
            <p className="ml-6 text-[#FFB92D]">How we proceed</p>
            <div className="relative pl-4">
              <p className="text-7xl font-[SamsungOneB]">Strategy,</p>
              <p className="text-6xl text-transparent bg-clip-text bg-gradient-to-b from-black from-50% to-white to-50% font-[SamsungOneB]">
                Thinking,
              </p>
              <p className="text-5xl text-white font-[SamsungOneB]">Realize</p>
              <div className="-z-10 absolute left-0 -bottom-8 w-full h-28 rounded-lg bg-[#FFB92D]"></div>
            </div>
          </div>
          {/* `How we proceed` Zone [ 2nd Column ] */}
          <div className="flex flex-col gap-y-8 w-1/3 h-auto mt-28">
            <HowWeProceedZoneBuilder
              number={1}
              content={
                "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour"
              }
            />
            <HowWeProceedZoneBuilder
              number={3}
              content={
                "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour"
              }
            />
          </div>
          {/* `How we proceed` Zone [ 2nd Column ] */}
          <div className="flex flex-col gap-y-8 w-1/3 h-auto mt-28">
            <HowWeProceedZoneBuilder
              number={2}
              content={
                "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour"
              }
            />
            <HowWeProceedZoneBuilder
              number={4}
              content={
                "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour"
              }
            />
          </div>
        </div>
        {/* Testimonials Zone */}
        <div
          x-data="{}"
          x-init="$nextTick(() => {
              let ul = $refs.testimonials;
              ul.insertAdjacentHTML('afterend', ul.outerHTML);
              ul.nextSibling.setAttribute('aria-hidden', 'true');
          })"
          className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul
            x-ref="testimonials"
            className="flex items-center justify-center md:justify-start w-full [&_li]:mx-10 py-10 animate-infinite-scroll"
          >
            <li>
              <TestimonialBuilder
                profilePic={julie_queen}
                username={"Janette Doe"}
                comment={
                  '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
                }
                start={4}
              />
            </li>
            <li>
              <TestimonialBuilder
                profilePic={julie_queen}
                username={"Janette Doe"}
                comment={
                  '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
                }
                start={4}
              />
            </li>
            <li>
              <TestimonialBuilder
                profilePic={julie_queen}
                username={"Janette Doe"}
                comment={
                  '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
                }
                start={4}
              />
            </li>
            <li>
              <TestimonialBuilder
                profilePic={julie_queen}
                username={"Janette Doe"}
                comment={
                  '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
                }
                start={4}
              />
            </li>
            <li>
              <TestimonialBuilder
                profilePic={julie_queen}
                username={"Janette Doe"}
                comment={
                  '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
                }
                start={4}
              />
            </li>
            <li>
              <TestimonialBuilder
                profilePic={julie_queen}
                username={"Janette Doe"}
                comment={
                  '" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
                }
                start={4}
              />
            </li>
          </ul>
        </div>
        {/* Partners Zone */}
        <div className="flex justify-center items-center gap-x-8 mb-10">
          <Image
            src={partners}
            alt="Samplex logo"
            width={250}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          ></Image>
          <Image
            src={partners}
            alt="Samplex logo"
            width={250}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          ></Image>
          <Image
            src={partners}
            alt="Samplex logo"
            width={250}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          ></Image>
          <Image
            src={partners}
            alt="Samplex logo"
            width={250}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          ></Image>
        </div>
        {/* News Letter Suscription Zone */}
        <div className="relative flex justify-center items-center w-4/5 h-72 my-10 bg-gray-800">
          <div className="absolute w-64 h-40 -left-1 -top-5 rounded-tl-lg bg-black"></div>
          <div className="absolute w-64 h-40 -right-1 -bottom-5 rounded-br-lg bg-black"></div>
          <div className="absolute w-full h-80 p-6 rounded-lg bg-white">
            <div className="flex flex-col justify-center items-center gap-y-8 w-full h-full rounded-xl bg-[#DBDBDB]">
              <div className="flex flex-col justify-center items-center gap-y-2">
                <p className="text-4xl font-[SamsungOneB]">
                  Sign up to our newsletter
                </p>
                <p>Stay up to date with some news and articles about tech</p>
              </div>

              <div className="flex justify-center gap-x-4 w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-2/5 p-3 rounded-md"
                  placeholder="abc@gmail.com"
                />
                <Link
                  href={"/"}
                  className="w-1/6 p-3 rounded-md bg-[#1288DC] text-center text-white font-[SamsungOneB]"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Samplex Home Page Footer */}
      <SamplexFooter />
    </div>
  );
}

export default SamplexStartPage;
