export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h2 className="text-5xl font-extrabold mb-4 text-red-500">404</h2>
      <h3 className="text-3xl font-bold mb-2">Page Not Found</h3>
      <p className="text-lg text-gray-400 text-center max-w-md">
        The requested resource could not be found. It may have been moved, deleted, or never existed.
      </p>
    </div>
  );
}
