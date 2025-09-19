export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between bg-[#3B5435] text-[#F8E5D6] px-8 py-4">
      <a href="/portal" className="text-2xl hover:underline font-bold">
        Parthenon Portal
      </a>
      <ul className="flex space-x-6">
        <li>
          <a href="/portal/schedule" className="hover:underline">
            Schedule
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Events
          </a>
        </li>
        <li>
          <a href="/portal/workshops" className="hover:underline">
            Workshops
          </a>
        </li>
      </ul>
    </nav>
  );
}
