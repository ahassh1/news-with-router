import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategotyNews] = useState([]);

  // console.log(id, data);
  useEffect(() => {
    const filteredNews = data.filter((news) => news.category_id == id);
    console.log(filteredNews);
    setCategotyNews(filteredNews);
  }, [data, id]);
  return <div>Total -{categoryNews.length} Found</div>;
};

export default CategoryNews;
