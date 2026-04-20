export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-sans">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">GreenGo Admin</h1>
        <p className="text-slate-500">Redirecting to login...</p>
        <a href="/admin/login" className="text-blue-600 hover:underline">Click here if not redirected</a>
      </div>
    </div>
  );
}
