import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function News() {
  const [fetchNews, setFetchNews] = useState([]);

  const fetchNewsData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=nepal&from=2026-08-17&sortBy=publishedAt&apiKey=71f7f6dc76d14292863a41c0c8ce86c2",
    );

    const finalFetch = await response.json();
    setFetchNews(finalFetch.articles);
    // console.log(finalFetch.articles);
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <>
      {/* <button onClick={fetchNewsData}>Get News</button> */}
      <h2>News page</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fetchNews.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </>
  );
}

export default News;
