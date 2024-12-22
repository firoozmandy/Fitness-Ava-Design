import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-2xl text-[#FFF] bg-[#F77A40] px-4 py-1 relative top-2 leading-8 hover:bg-[#F77A40] hover:text-[#000000aa]"
      onClick={() => setSelectedPage(SelectedPage.AboutUs)}
      href={`#${SelectedPage.AboutUs}`}
    >
      {children}
    </AnchorLink>
  );
};
export default ActionButton;
