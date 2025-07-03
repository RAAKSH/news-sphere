import Link from "next/link";

import NewsList from "../../../components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "../../../../../utils/news";

export default async function Archive({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = await getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availableYears = await getAvailableNewsYears();

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <div className=" bg-black text-white px-12 py-4 ">
        <nav className="flex flex-row gap-3">
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;

            return (
            
                <Link
                  key={link}
                  href={href}
                  className="px-4 py-1 rounded-full bg-gray-500 text-black hover:bg-gray-200 transition"
                >
                  {link}
                </Link>
             
            );
          })}
        </nav>
      </div>
      {newsContent}
    </>
  );
}
