import React from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItems from "./NavItems";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <TfiAlignJustify className="text-3xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center font-bold text-xl">
            LEGO
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <NavItems mobile />

        
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
