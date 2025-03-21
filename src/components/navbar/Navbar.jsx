export function Navbar({ isNavOpen, setIsNavOpen }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 px-11 bg-white  p-4 transition-transform lg:relative lg:w-1/6 lg:translate-x-0 lg:bg-white lg:text-black shadow-xl ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="lg:hidden absolute top-4 right-4 text-black cursor-pointer"
        onClick={() => setIsNavOpen(false)}
      >
        X
      </button>
      <h2 className="text-2xl font-bold">Navigation</h2>
      <ul className="mt-4 space-y-3">
        <li className="cursor-pointer">Dashboard</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Tasks</li>
        <li className="cursor-pointer">Reports</li>
        <li className="cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}
