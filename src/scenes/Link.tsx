import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const LowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage === LowerCasePage ? "text-[#F77A40]" : ""} w-20 size-6 leading-9 transition duration-500 hover:text-[#F77A40]  `}
      href={`#${LowerCasePage}`}
      onClick={() => setSelectedPage(LowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
