import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-black text-white border-b border-gray-700 shadow-sm">
      <div className="font-semibold text-3xl font-serif">
        <Link href="/">News Sphere</Link>
      </div>

      <nav>
        <ul className="flex text-lg font-medium font-serif">
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
