export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#06011B] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-white/60 mt-2 text-sm">
              Sign in to continue to your account
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-white/80 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:ring-2 focus:ring-white/15 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm text-white/80">Password</label>
                <a href="#" className="text-xs text-white/60 hover:text-white transition">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/30 focus:ring-2 focus:ring-white/15 transition"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-white/10"
              />
              <label htmlFor="remember" className="text-sm text-white/70">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-white text-[#06011B] py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-sm text-white/50 mt-6">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-white hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
