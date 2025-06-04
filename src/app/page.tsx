export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <img
        src="/images/news.jpg"
        alt="News Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/90 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">News Sphere</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Stay updated with the latest stories in technology, environment,
          space, and more.
        </p>
      </div>
    </div>
  );
}
