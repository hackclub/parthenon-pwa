export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Left side with background color */}
      <div className="w-2/5 flex flex-col justify-center items-start bg-[#3B5435] text-[#F8E5D6] p-12">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className="mb-6 text-lg">
          Sign in to access your ticket, view the event schedule, select
          workshops, and more!
        </p>
        <form className="w-full flex">
          <input
            type="email"
            className="flex-1 p-3 rounded-l bg-[#F8E5D6] text-[#3B5435] focus:outline-none"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-[#2C7A7B] text-white px-4 rounded-r flex items-center"
          >
            <span className="material-icons"></span>
          </button>
        </form>
      </div>
      <div className="flex-1 flex items-center justify-center bg-[#F4E3C1]">
        <img src="/logo.png" alt="Logo" className="w-96 h-96 object-contain" />
      </div>
    </div>
  );
}
