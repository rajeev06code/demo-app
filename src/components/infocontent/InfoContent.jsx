export default function InfoContent({ isInfoOpen}) {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-20 w-72 bg-white text-black p-6 transition-transform duration-300 ease-in-out lg:relative lg:w-1/6 shadow-xl ${
        isInfoOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
    
      <h2 className="text-2xl font-bold mb-6">Information</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
        <p className="text-sm text-gray-600">Last updated 5 minutes ago</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Statistics</h3>
        <ul className="space-y-1">
          <li className="text-sm text-gray-600">Views: 1,234</li>
          <li className="text-sm text-gray-600">Likes: 567</li>
          <li className="text-sm text-gray-600">Comments: 89</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
        <button className="w-full px-4 py-2 bg-black text-white rounded-md cursor-pointer">
          Create New
        </button>
      </div>
    </div>
  );
}
