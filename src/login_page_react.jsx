export default function LoginPage() {
  return (
    <div className="w-screen h-screen bg-[#06011B] flex flex-col">
      {/* Header */}
      <div className="bg-[#090320] border border-[#444444] flex items-center justify-between px-6 py-4 mx-auto w-11/12 max-w-6xl mt-6 rounded-2xl">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="h-12"
        />
        <div className="flex gap-4">
          <div 
            style={{ 
              background: "linear-gradient(to bottom, #FFA47D, #FF6827)",
              borderRadius: "7px",
              padding: "0.88px"
            }}
            className="hover:opacity-90 transition"
          >
            <button 
              style={{ 
                background: "linear-gradient(to bottom, #FF6827, #C33A00)"
              }}
              className="px-6 py-2 text-white font-medium rounded-[7px] w-full h-full"
            >
              LOGIN_
            </button>
          </div>
          <div 
            style={{ 
              background: "linear-gradient(to bottom, #57D5FF, #AEEBFF)",
              borderRadius: "7px",
              padding: "0.88px"
            }}
            className="hover:opacity-90 transition"
          >
            <button 
              style={{ 
                background: "linear-gradient(to bottom, #57D5FF, #00A7DF)"
              }}
              className="px-6 py-2 text-white font-medium rounded-[7px] w-full h-full"
            >
              SIGN UP_
            </button>
          </div>
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
