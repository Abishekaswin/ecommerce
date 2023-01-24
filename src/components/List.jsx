import React from "react";
import "./List.scss";
import Card from "../components/Card";
import useFetch from "./hooks/useFetch";

const List = ({ SubCats, maxprice, sort, catid }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catid}${SubCats.map( (item)=>`&[filters][sub-categories][id][$eq]=${item}`)}`
  );
  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
