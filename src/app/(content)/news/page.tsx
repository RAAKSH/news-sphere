import { DUMMY_NEWS } from "../../dummyData";
import NewsList from "../components/NewsList";

export default function news() {
  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold p-2">News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
