import { DUMMY_NEWS } from "@/app/dummyData";
import { notFound } from "next/navigation";

export default function Image({ params }) {
  const newsSlug = params?.slug;
  const newsItem = DUMMY_NEWS?.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }
  

  return <div>
    <img src={`images/news/${newsItem.image}`} alt={newsItem.title}  />
  </div>;
}
