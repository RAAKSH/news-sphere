import Link from "next/link";
import { getAvailableNewsYears } from "../../../utils/news";

export default function Archive() {
  const links = getAvailableNewsYears();
  return (
    <div className=" bg-black text-white">
    <nav className="flex flex-row gap-3">
      {links.map((link) => (
        <Link
          key={link}
          href={`/archive/${link}`}
          className="px-4 py-1 rounded-full bg-gray-500 text-black hover:bg-gray-200 transition"
        >
          {link}
        </Link>
      ))}
    </nav>
  </div>
  );
}
