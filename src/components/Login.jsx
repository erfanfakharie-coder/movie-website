export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-white">
      <form className="flex flex-col gap-4 bg-white p-8 rounded-3xl shadow-lg">
        <div>
          <input id="email" type="email" placeholder="ایمیل" className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 text-base focus:outline-none focus:border-blue-400 focus:bg-white transition" />
        </div>
        <div>
          <input id="password" type="text" placeholder="رمز ورود" className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 text-base focus:outline-none focus:border-blue-400 focus:bg-white transition" />
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">ورود</button>
      </form>
    </div>
  );
}
