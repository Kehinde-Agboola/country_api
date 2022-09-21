import React from "react";

const Cards = ({ title, image_url, population, region, capital, index }) => {
  return (
    <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
      <img
        src={image_url.svg}
        alt="{Fladgs}"
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg "
      />
      <div className="p-4">
        <h1 className="font-bold mb-4 text-gray-700 dark:text-white">
          {title}
        </h1>
        <p className="text-xs text-gray-700 dark:text-white">
          {" "}
          Population:
          <span className="text-gray-700 dark:text-white"> {population}</span>
        </p>
        <p className="text-xs text-gray-700 dark:text-white">
          region{" "}
          <span className="text-gray-700 dark:text-white"> {region}</span>
        </p>
        <p className="text-xs text-gray-700 dark:text-white">
          Capital:
          <span className="text-gray-700 dark:text-white"> {capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Cards;
