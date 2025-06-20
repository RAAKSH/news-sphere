/* eslint-disable @next/next/no-img-element */
import { DUMMY_NEWS } from "@/app/dummyData";
import { notFound } from "next/navigation";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function newDetails({ params }:any) {
  const newsSlug = params?.id;

  const newsItem = DUMMY_NEWS?.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <Link href={`/news/${newsItem?.slug}/image`}>
          {" "}
          <img
            src={`/images/${newsItem?.image}`}
            alt={newsItem?.title}
            className="w-full max-h-[400px] object-cover rounded-lg mb-6"
          />
        </Link>

        <h1 className="text-4xl font-bold mb-2">{newsItem?.title}</h1>
        <span className="text-sm text-gray-400 block mb-6">
          {newsItem?.date}
        </span>

        <p className="text-lg  text-gray-200">{newsItem?.content}</p>
      </div>
    </div>
  );
}
