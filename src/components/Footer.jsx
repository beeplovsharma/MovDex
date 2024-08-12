import React from "react";
import ContentWrapper from "./ContentWrapper";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
function Footer() {

  return (
    <>
      <div className="w-full z-[99] bg-[#020c1b] text-[white] min-h-[40vh] pb-[20px] pt-[40px]">
        <ContentWrapper>
          <div className="container flex flex-col gap-4">
            <div className="flex justify-center gap-8">
              {["Terms of Use", "Privacy Policy", "About", "Blog", "FAQ"].map(
                (l, id) => (
                  <h1 className="text-[10px] md:text-[16px]" key={id}>{l}</h1>
                )
              )}
            </div>
            <div className="paragraph flex justify-center">
              <h1 className="text-[12px] text-center max-w-[800px] opacity-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </h1>
            </div>

            <div className="social-media flex gap-4 justify-center">
              <button className="bg-[#04152d] p-3 rounded-full">
                <RiFacebookFill size={20} />
              </button>
              <button className="bg-[#04152d] p-3 rounded-full">
                <AiOutlineInstagram size={20} />
              </button>
              <button className="bg-[#04152d] p-3 rounded-full">
                <IoLogoTwitter size={20} />
              </button>
              <button className="bg-[#04152d] p-3 rounded-full">
                <AiFillLinkedin size={20} />
              </button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

export default Footer;
