/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function NewsList({news}) {
  return (
    <div className="px-6 py-4  bg-black text-white">    
      <ul className="flex flex-wrap gap-10 p-10">
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <div className="text-white w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={`/images/${news.image}`}
                  alt={news.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-md font-semibold">{news.title}</h2>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
