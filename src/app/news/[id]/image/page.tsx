/* eslint-disable @next/next/no-img-element */
import { DUMMY_NEWS } from "@/app/dummyData";
import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Image({ params }:any) {
  const newsSlug = params?.slug;
  const newsItem = DUMMY_NEWS?.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }
  

  return <div>
    <img src={`images/news/${newsItem.image}`} alt={newsItem.title}  />
  </div>;
}
