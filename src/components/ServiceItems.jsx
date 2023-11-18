import { BiPlus } from "react-icons/bi";
import { useState } from "react";

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";

export const ServiceItems = ({ item }) => {
  return (
    <div>
      <AccordionItem className=" bg-gray rounded-lg mb-2 p-2">
        <h2>
          <AccordionButton>
            <Box as="span" flex="10" textAlign="left">
              {item.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pt={10} pb={4}>
          {<p>{item.content}</p>}
        </AccordionPanel>
      </AccordionItem>

  </div>
  )
};
