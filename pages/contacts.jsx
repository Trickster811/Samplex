import React from "react";
import Image from "next/image";
import Link from "next/link";
import SamplexHeader from "../layouts/header";
import SamplexFooter from "../layouts/footer";
// assets imports : images
import samplex_logo from "../assets/images/samplex_logo_colored.png";
// assets imports : icons
// assets imports : css
import "../assets/css/samplex.css";

function SamplexAboutPage() {
  return (
    <div className="w-screen font-[SamsungOne]">
      {/* Samplex Home Page Header */}
      <SamplexHeader />
      {/* Samplex Home Page Main Content */}
      <div className="w-full bg-slate-700">Main Content</div>
      {/* Samplex Home Page Footer */}
      <SamplexFooter />
    </div>
  );
}

export default SamplexAboutPage;
