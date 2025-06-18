import NewsList from "@/app/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/utils/news";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Archive({ params }:any) {
  const filter = params?.filter;
  console.log(filter?.[1]);
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news;
  let links = getAvailableNewsYears();
  if(selectedMonth && selectedYear){
    news= getNewsForYearAndMonth(selectedYear,selectedMonth);
    links=[];
  }

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  let newsContent = <>No News Found for this selected period</>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
 if((selectedYear && !getAvailableNewsYears().includes(Number(selectedYear))) ||(selectedMonth && !getAvailableNewsMonths(selectedYear).includes(Number(selectedMonth))) ){
  throw new Error("Invalid Filter")
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
