import React from "react";
import Image from "next/image";
import Link from "next/link";
// assets imports : images
import samplex_logo_light from "../assets/images/samplex_logo_light.png";
import x from "../assets/icons/x.svg";
// assets imports : icons
import { Facebook, GitHub, Linkedin, Twitter } from "react-feather";
// assets imports : css
import "../assets/css/samplex.css";

function SamplexFooter() {
  return (
    <div className="w-full px-14 py-8 bg-[#FFB92D]">
        {/* Footer First line */}
        <div className="lg:grid lg:grid-cols-5 lg:place-content-center lg:content-center md:justify-around md:items-center lg:gap-x-8 w-full">
          {/* Footer First Line [ 1st Part ] */}
          <div className="flex flex-col gap-y-4">
            <Image
              src={samplex_logo_light}
              alt="Samplex logo"
              width={100}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
            ></Image>
            <p className="text-balance">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more or less normal.
            </p>
            <div className="flex gap-x-4 lg:mt-8">
              <Link
                href={"#"}
                className="p-2 border rounded-md border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white text-sm"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href={"#"}
                className="p-2 border rounded-md border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white text-sm"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href={"#"}
                className="p-2 border rounded-md border-black hover:bg-black text-black hover:text-white text-sm"
              >
                {/* <Image
                  priority
                  src={x}
                  alt="twitter logo"
                  // width={100}
                  className=""
                ></Image> */}
                <Twitter size={20} />
              </Link>
              <Link
                href={"#"}
                className="p-2 border rounded-md border-gray-500 hover:bg-gray-500 text-gray-500 hover:text-white text-sm"
              >
                <GitHub size={20} />
              </Link>
            </div>
          </div>
          {/* Footer First Line [ 2nd Part ] */}
          <div className="flex flex-col gap-y-4 h-full">
            <p className="text-xl font-[SamsungOneB]">Services</p>
            <div className="flex flex-col gap-y-2">
              <Link href={"#"} className="hover:underline">
                Mobile Development
              </Link>
              <Link href={"#"} className="hover:underline">
                Web Development
              </Link>
              <Link href={"#"} className="hover:underline">
                Desktop Development
              </Link>
              <Link href={"#"} className="hover:underline">
                UI/UX Design
              </Link>
              <Link href={"#"} className="hover:underline">
                Branding
              </Link>
            </div>
          </div>
          {/* Footer First Line [ 3rd Part ] */}
          <div className="flex flex-col gap-y-4 h-full">
            <p className="text-xl font-[SamsungOneB]">Company</p>
            <div className="flex flex-col gap-y-2">
              <Link href={"#"} className="hover:underline">
                Team
              </Link>
              <Link href={"#"} className="hover:underline">
                Customers
              </Link>
              <Link href={"#"} className="hover:underline">
                Blog
              </Link>
              <Link href={"#"} className="hover:underline">
                Team of Service
              </Link>
              <Link href={"/"} className="hover:underline">
                Terms of Use
              </Link>
              <Link href={"/"} className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
          {/* Footer First Line [ 4th Part ] */}
          <div className="flex flex-col gap-y-4 h-full">
            <p className="text-xl font-[SamsungOneB]">Support</p>
            <div className="flex flex-col gap-y-2">
              <Link href={"#"} className="hover:underline">
                Stack Community
              </Link>
              <Link href={"#"} className="hover:underline">
                Support Documents
              </Link>
              <Link href={"#"} className="hover:underline">
                Helpdesk API Documents
              </Link>
              <Link href={"#"} className="hover:underline">
                Services Status
              </Link>
              <Link href={"#"} className="hover:underline">
                Email Contact
              </Link>
            </div>
          </div>
          {/* Footer First Line [ 5th Part ] */}
          <div className="flex flex-col gap-y-4 h-full">
            <p className="text-xl font-[SamsungOneB]">Contacts Us</p>
            <div className="flex flex-col gap-y-2">
              <Link
                href={"https://Samplex.digital@gmail.com"}
                className="hover:underline"
              >
                Samplex.digital@gmail.com
              </Link>
              <Link href={"#"} className="hover:underline">
                +237 000 000 000
              </Link>
              <Link href={"#"} className="hover:underline">
                North - Garoua
              </Link>
              <Link href={"#"} className="hover:underline">
                Cameroon
              </Link>
            </div>
          </div>
        </div>
        {/* Footer Second Line */}
        <div className="flex justify-between items-center pt-8">
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>Samplex . All right reserved</p>
          <p className="flex gap-x-4">
            <Link href={"/"} className="underline">
              Terms of Use
            </Link>
            <Link href={"/"} className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
  );
}

export default SamplexFooter;
