import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
  } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { Tooltip, Button } from "@chakra-ui/react";


export const SocialMediaComponent = () => {
  return (
    <div className="w-10 bg-primary hidden md:block fixed rounded-r-md lg:top-56 top-96">
    <div className="w-full h-full flex flex-col">
      <div className="flex py-2 justify-center items-center">
        <div>
          <Tooltip
            className="p-1 font-bold ml-1 text-xs"
            hasArrow
            color="lightskyblue"
            label="Facebook"
            placement="right"
          >
            <Button>
              <FaFacebookF className="text-xl text-tersary duration-300 hover:text-[#87CEFA]" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex py-2 justify-center items-center">
        <div>
          <Tooltip
            className="p-1 font-bold ml-1 text-xs"
            hasArrow
            color="lightskyblue"
            label="Xtwitter"
            placement="right"
          >
            <Button>
              <FaXTwitter className="text-xl text-tersary duration-300 hover:text-[#87CEFA]" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex py-2 justify-center items-center">
        <div>
          <Tooltip
            className="p-1 font-bold ml-1 text-xs"
            hasArrow
            color="lightskyblue"
            label="Instagram"
            placement="right"
          >
            <Button>
              <FaInstagram className="text-xl text-rose-600 text-tersary duration-300 hover:text-[#87CEFA]" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex py-2 justify-center items-center">
        <div>
          <Tooltip
            className="p-1 font-bold ml-1 text-xs"
            hasArrow
            color="lightskyblue"
            label="Linkedin"
            placement="right"
          >
            <Button>
              <FaLinkedinIn className="text-xl text-lightskyblue-600 text-tersary duration-300 hover:text-[#87CEFA]" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex py-2 justify-center items-center">
        <div>
          <Tooltip
            className="p-1 font-bold ml-1 text-xs"
            hasArrow
            color="lightskyblue"
            label="Youtube"
            placement="right"
          >
            <Button>
              <FaYoutube className="text-xl text-red-500 text-tersary duration-300 hover:text-[#87CEFA]" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
  )
}