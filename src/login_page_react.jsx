export default function LoginPage() {
  return (
    <div className="w-screen h-screen bg-[#06011B] flex flex-col">
      {/* Header */}
      <div className="bg-[#090320] border border-[#444444] flex items-center justify-between px-6 py-4 mx-auto w-11/12 max-w-6xl mt-6">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="h-12"
        />
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-orange-500 text-white rounded font-medium hover:bg-orange-600 transition">
            Login
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition">
            Sign up
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="/background-image.png" 
          alt="Background" 
          className="max-w-2xl max-h-2xl opacity-20 blur-md"
        />
      </div>
    </div>
  );
}
