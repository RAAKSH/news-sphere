/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
//import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

type NewsItem = {
  id: string | number;
  slug: string;
  image: string;
  title: string;
};


type Props = {
  news: NewsItem[];
};


export default function NewsList({news}: Props) {
  return (
    <div className="px-6 py-4  bg-black text-white">    
      <ul className="flex flex-wrap gap-10 p-10">
        {news?.map((news: NewsItem) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <div className="text-white w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={`/images/${news.image}`}
                  alt={"image"}
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
