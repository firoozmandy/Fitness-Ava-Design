import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/Home/Home";
import Plans from "./scenes/Plans/Plans";
import Footer from "./scenes/Footer/Footer";
import Blog from "./scenes/Blog/Blog";
import AboutUs from "./scenes/AboutUs/AboutUs";
import Join from "./scenes/join/Join";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-[rgb(255 254 253)] ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Plans setSelectedPage={setSelectedPage} />
      <Blog setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
