import NewsList from "@/app/components/NewsList";

import { getNewsForYear } from "@/utils/news";

export default function Archive({ params }) {
  const newsYear = params?.year;

  const newsArray = getNewsForYear(newsYear);
  return (
    <>
      <NewsList news={newsArray} />
    </>
  );
}
