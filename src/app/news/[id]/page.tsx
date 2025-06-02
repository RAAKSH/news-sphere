import { DUMMY_NEWS } from "@/app/dummyData";

export default function newDetails({ params }) {
  const newsSlug = params.id;

  const newsItem = DUMMY_NEWS?.find((newsItem) => newsItem.slug === newsSlug);

  return (
    <div className="min-h-screen bg-black text-white">
      {" "}
      this News ID is {newsItem?.title} This is Details Page
    </div>
  );
}
