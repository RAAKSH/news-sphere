/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";

export default function newsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const data = await fetch("http://localhost:8080/news");
    if (!data.ok) {
      setError("Failed to fetch news.");
      setLoading(true);
    }
    const dataJson = await data.json();
    setLoading(false);
    setNews(dataJson);
  };
  let newsContent;
  if (loading) {
    newsContent = <p>Loading....</p>;
    return newsContent;
  }
  if (error) {
    newsContent = <p>{error}</p>;
    return <p></p>;
  }

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold p-2">News Page</h1>
      {newsContent}
    </div>
  );
}
