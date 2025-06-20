import NewsList from "@/app/(content)/components/NewsList";
import { getLatestNews } from "@/utils/news";


export default function Latest() {
  const latest= getLatestNews();
    return (
      <>
        <h1 className="text-2xl p-3">Latest News</h1>
        <NewsList news={latest} />
      </>
    );
  }
  