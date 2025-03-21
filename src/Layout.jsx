import { useState, lazy, Suspense } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { MainContent } from "./components/maincontent/MainContent";
const InfoPanel = lazy(() => import("./components/infocontent/InfoContent"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <InfoPanel isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} />
      </Suspense>
    </div>
  );
}
