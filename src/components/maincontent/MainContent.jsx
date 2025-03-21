import { MdOutlineMenu } from "react-icons/md";

export function MainContent({ setIsNavOpen, isInfoOpen, setIsInfoOpen }) {
  return (
    <div className="flex-1 p-6 lg:w-5/6 lg:px-12 transition-all">
      <button
        className="lg:hidden text-gray-800 mb-4 cursor-pointer"
        onClick={() => setIsNavOpen(true)}
      >
        <MdOutlineMenu size={28} />
      </button>

      <h1 className="text-2xl font-bold">Main Content</h1>
      <p className="mt-2 text-gray-600">
        This is the main content area. Click the button below to view more info.
      </p>
      <button
        className="mt-4 cursor-pointer px-4 py-2 bg-emerald-300 text-white rounded-md"
        onClick={() => setIsInfoOpen(!isInfoOpen)}
      >
        {isInfoOpen ? "Close Info" : "View Info"}
      </button>
    </div>
  );
}