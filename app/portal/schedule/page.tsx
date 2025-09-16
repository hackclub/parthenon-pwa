export default function Schedule() {
  return (
    <div className="min-h-screen bg-[#F4E3C1]">
      <nav className="w-full flex items-center justify-between bg-[#3B5435] text-[#F8E5D6] px-8 py-4">
        <h1 className="text-2xl font-bold">Parthenon Portal</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Events
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Workshops
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Profile
            </a>
          </li>
        </ul>
      </nav>
      {/* Add your page content here */}
    </div>
  );
}
