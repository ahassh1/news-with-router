import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);
  useEffect(() => {
    const filteredNews = data.filter((news) => news.category_id == id);
    console.log(filteredNews);
  }, [data, id]);
  return <div>category news - {id}</div>;
};

export default CategoryNews;
