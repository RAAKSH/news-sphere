import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-black text-white border-b border-gray-700 shadow-sm">
      <div className="text-xl font-semibold">
        <Link href="/">News Sphere</Link>
      </div>

      <nav>
        <ul className="flex text-sm font-medium">
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
