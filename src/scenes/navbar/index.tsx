
import Link from "../Link";
import { SelectedPage } from "../../shared/types";
import useMediaQueries from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";

import Logo from "@/assets/Logo.png";
import Logo2 from "@/assets/Logo2.png";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  const flexBetween = "flex items-center justify-evenly	";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQueries("(min-width:1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-[#fff] drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground}${flexBetween} fixed top-0 z-30 w-full py-4`}
      >
        <div className={`${flexBetween} w-full gap-10 `}>
          <div className={`${flexBetween} w-full ml-20 gap-20`}>
            <div className="flex items-end flex-grow md:ml-6 -ml-11">
              <img src={Logo} alt="logo" className="w-16 h-10" />
              <img src={Logo2} alt="logo2" className="w-34 h-9" />
            </div>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full ml-20 text-[#000] `}>
                <div className={`${flexBetween} gap-0  `}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Plans"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Blog"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="AboutUs"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 ml-38 `}>
                  <p className="leading-10 size-6 w-14">Sing In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Start Free Trial
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-[#F77A40] p-2 mr-14"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Plans"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Blog"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="AboutUs"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
