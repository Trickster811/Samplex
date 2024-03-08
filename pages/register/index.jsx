import React, { useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";
import { Send } from "react-feather";
import { redirect } from "next/navigation";
// assets imports : css
import "../../assets/css/samplex.css";

function SamplexRegisterForServicePage(props) {
  // Handle state for Gmail contact method
  const [handleContactMethod, setHandleContactMethod] = useState(0);

  const router = useRouter();
  const { s } = router.query;
  console.log(s);

  if (s == null) {
    // Router.push("/new-quote");
  }
  return (
    <div className="flex w-screen h-screen font-[SamsungOne]">
      <div className="w-1/2 h-full rounded-r-md bg-[#1288DC]">l</div>
      <div className="flex flex-col justify-center items-center gap-y-6 w-1/2 h-full overflow-auto">
        <p className="mt-12 text-5xl font-[SamsungOneB] capitalize">
          {s} Service
        </p>
        <p className="">Provide information about the service</p>
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">
          <div className="flex flex-col gap-y-2 w-2/3">
            <p>Description of the service</p>
            <textarea
              type="text"
              name="details"
              id="details"
              placeholder="details"
              className="w-full h-18 px-4 py-2 rounded-md border-transparent shadow-outer focus:outline-none focus:ring-0 focus:border-transparent bg-[#DBDBDB]"
              cols="10"
              rows="6"
            ></textarea>
          </div>
          <div className="flex flex-col gap-y-2 w-2/3">
            <p>Specifications (Optional)</p>
            <input
              type="text"
              name="specification"
              id="specification"
              placeholder="specifications"
              className="w-full px-4 py-2 rounded-md border-transparent shadow-outer focus:outline-none focus:ring-0 focus:border-transparent bg-[#DBDBDB]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="">How would you like to be contacted?</p>
          <div className="flex justify-center items-center gap-x-4">
            <button
              onClick={() => {
                setHandleContactMethod(0);
              }}
              className={`px-5 py-3 rounded-md bg-[#DBDBDB] border-2 ${
                handleContactMethod === 0
                  ? "border-[#1288DC]"
                  : "border-[#DBDBDB]"
              }`}
            >
              G
            </button>
            <button
              onClick={() => {
                setHandleContactMethod(1);
              }}
              className={`px-5 py-3 rounded-md bg-[#DBDBDB] border-2 ${
                handleContactMethod === 1
                  ? "border-[#1288DC]"
                  : "border-[#DBDBDB]"
              }`}
            >
              W
            </button>
            <button
              onClick={() => {
                setHandleContactMethod(2);
              }}
              className={`px-5 py-3 rounded-md bg-[#DBDBDB] border-2 ${
                handleContactMethod === 2
                  ? "border-[#1288DC]"
                  : "border-[#DBDBDB]"
              }`}
            >
              L
            </button>
            <button
              onClick={() => {
                setHandleContactMethod(3);
              }}
              className={`px-5 py-3 rounded-md bg-[#DBDBDB] border-2 ${
                handleContactMethod === 3
                  ? "border-[#1288DC]"
                  : "border-[#DBDBDB]"
              }`}
            >
              F
            </button>
            <button
              onClick={() => {
                setHandleContactMethod(4);
              }}
              className={`px-5 py-3 rounded-md bg-[#DBDBDB] border-2 ${
                handleContactMethod === 4
                  ? "border-[#1288DC]"
                  : "border-[#DBDBDB]"
              }`}
            >
              X
            </button>
          </div>
        </div>
        {handleContactMethod === 0 && (
          <div className="flex flex-col gap-y-2 w-2/3">
            <p>Email</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
              className="px-4 py-2 rounded-md border-transparent shadow-outer focus:outline-none focus:ring-0 focus:border-transparent bg-[#DBDBDB]"
            />
          </div>
        )}

        <Link
          href={"#"}
          className="group flex justify-center items-center gap-x-2 w-2/3 py-2 rounded-md bg-[#1288DC] text-white font-[SamsungOneB]"
        >
          <p>Send</p>
          <Send className="transition duration-700 ease-in-out group-hover:translate-x-4" />
        </Link>
        <div className="h-20"></div>
      </div>
    </div>
  );
}

export default SamplexRegisterForServicePage;
