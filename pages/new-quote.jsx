import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceCardBuilder } from "../components/new-quote.component";
// assets imports : images
import samplex_logo_colored from "../assets/images/samplex_logo_colored.png";
import service_mobile from "../assets/images/service_mobile.png";
import ui_ux_design from "../assets/images/service_ux_design.png";
// assets imports : icons
import { ArrowLeft } from "react-feather";
// assets imports : css
import "../assets/css/samplex.css";

function SamplexNewQuotePage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-[#1288DC] from-40% to-[#FFB92D] font-[SamsungOne]">
      {/* Samplex New Quote Page Main Content */}
      <div className="flex flex-col w-[90vw] h-[90vh] p-4 rounded-lg bg-white backdrop-blur-xl">
        <Link href={"/"} className="flex gap-x-2">
          <ArrowLeft color="#000" />
          <p>back</p>
        </Link>
        <div className="flex flex-col justify-center items-center gap-y-8 w-full h-full">
          <p className="text-5xl text-center font-[SamsungOneB]">
            Which service would you like?
          </p>
          <div className="flex gap-x-6">
            {/* First Service Card */}
            <ServiceCardBuilder
              image={service_mobile}
              title={"Branding"}
              color={"#FFB92D"}
              link={"branding"}
            />
            {/* Second Service Card */}
            <ServiceCardBuilder
              image={service_mobile}
              title={"Development"}
              color={"#1288DC"}
              link={"development"}
            />
            {/* THird Service Card */}
            <ServiceCardBuilder
              image={ui_ux_design}
              title={"UI/UX Design"}
              color={"#DBDBDB"}
              link={"design"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SamplexNewQuotePage;
