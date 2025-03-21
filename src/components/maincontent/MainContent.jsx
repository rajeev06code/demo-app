import { IoMenuSharp } from "react-icons/io5";
import { Card } from "../card/Card";
import { cardData } from "../../data";
import { IoIosInformationCircleOutline } from "react-icons/io";

export function MainContent({ setIsNavOpen, isInfoOpen, setIsInfoOpen }) {
  return (
    <div
      className={`flex-1 p-6 transition-all ${
         isInfoOpen ? "lg:w-4/6" : "lg:w-5/6"
      } lg:px-12`}
    >
      <button
        className="lg:hidden text-gray-800 mb-4"
        onClick={() => setIsNavOpen(true)}
      >
       <IoMenuSharp className="w-[35px] h-[35px] p-2 text-white bg-black rounded-sm"/>
      </button>

      <h1 className="text-5xl font-bold">Welcome to Dashboard</h1>
      <p className="mt-2 text-gray-600">
        This is a responsive 3-column layout built with React.js and Tailwind CSS.
        The layout adapts seamlessly across different screen sizes while
        maintaining functionality and user experience.
      </p>

      <div className="mt-6 mb-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cardData.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>


      <button
        className="mt-6 cursor-pointer px-4 py-2 flex items-center justify-between gap-1 bg-black text-white rounded-md"
        onClick={() => setIsInfoOpen(!isInfoOpen)}
      > 
      <IoIosInformationCircleOutline/>
        {isInfoOpen ? "Hide Info" : "View Info"}
      </button>
   
    </div>
  );
}