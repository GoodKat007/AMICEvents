export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-slate-400 mb-8">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="bg-gradient-to-r from-blue-900 to-yellow-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
