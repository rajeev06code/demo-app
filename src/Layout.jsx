import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Navbar } from "./components/navbar/Navbar";
import { MainContent } from "./components/maincontent/MainContent";
import { InfoContent } from "./components/infocontent/InfoContent";

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      <MainContent
        setIsNavOpen={setIsNavOpen}
        isInfoOpen={isInfoOpen}
        setIsInfoOpen={setIsInfoOpen}
      />

      {isInfoOpen && <InfoContent />}
    </div>
  );
}
