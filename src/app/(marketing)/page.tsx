import Link from "next/link";
import "../globals.css";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="text-center px-4 py-6">
        <img
          src="/icon.jpg"
          alt="A newspaper"
          className="rounded-full w-40 h-40 mx-auto object-cover mb-4"
        />
        <h1 className="font-bold font-serif text-4xl p-5">
          A News Site For The Next Generation
        </h1>
        <div className="font-2xl  font-semibold text-center text-gray-400 max-w-3xl mx-auto px-6 py-6 leading-relaxed space-y-4">
          <p>
            Next News is here to deliver you all the latest news - concise &
            unbiased!
          </p>

          <p>
            NextNews aims to provide you with the latest news in a concise and
            unbiased manner. We strive to deliver the news in a way that is easy
            to understand and to the point. We want to keep you informed without
            overwhelming you with unnecessary information.
          </p>

          <p>
            We employ a team of dedicated journalists who are committed to
            delivering the news in a fair and unbiased manner. Our team is
            passionate about keeping you informed and up to date with the latest
            news.
          </p>
        </div>

        <Link
          href="/news"
          className="inline-block bg-gray-200 text-black font-medium px-6 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300 shadow-md"
        >
          Read the latest news
        </Link>
      </div>
    </div>
  );
}
