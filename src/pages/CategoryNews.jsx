import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategotyNews] = useState([]);

  // console.log(id, data);
  useEffect(() => {
    if (id == "0") {
      setCategotyNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategotyNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      console.log(filteredNews);
      setCategotyNews(filteredNews);
    }
  }, [data, id]);
  return <div>Total -{categoryNews.length} Found</div>;
};

export default CategoryNews;
