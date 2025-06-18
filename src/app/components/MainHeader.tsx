"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path= usePathname();
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-black text-white border-b border-gray-700 shadow-sm">
      <div className="font-semibold text-3xl font-serif">
        <Link href="/">News Sphere</Link>
      </div>

      <nav>
        <ul className="flex  gap-4 text-lg font-medium font-serif p-3 m-2">
          <li>
            <Link href="/news" className={path.startsWith("/news")? "bg-gray-400 px-3 py-2 border-1 rounded-xl" : "px-3 py-2"}>News</Link>
          </li>
          <li>
            <Link href="/archive"  className={path.startsWith("/archive")? "bg-gray-400 px-3 py-2 border-1 rounded-xl" : "px-3 py-2"}> Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
