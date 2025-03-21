import { X } from "lucide-react";

export function Navbar({ isNavOpen, setIsNavOpen }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 w-60 bg-blue-300 text-white p-4 transition-transform lg:relative lg:w-1/6 lg:translate-x-0 ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="lg:hidden absolute top-4 right-4 text-white cursor-pointer"
        onClick={() => setIsNavOpen(false)}
      >
        X
    
      </button>
      <h2 className="text-xl font-bold">Left Nav</h2>
      <ul className="mt-4 space-y-2">
        <li className="p-2 cursor-pointer border border-white rounded">Home</li>
        <li className="p-2 cursor-pointer border border-white rounded">About</li>
        <li className="p-2 cursor-pointer border border-white rounded">Contact</li>
      </ul>
    </div>
  );
}