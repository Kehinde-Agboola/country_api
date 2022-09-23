import React, { useState, useEffect } from "react";
// import { FontAwesomeIcons } from "@fortawesome/react-fontawesome";
// import { load } from "./@fortawesome/free-solid-icons";
import Cards from "../../component/Card/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [country, setcountries] = useState([]);
  const [mode, setMode] = useState();
  const [toggle, setToggle] = useState(`LightMode <i class="fa fa-sun"></i> `);
  // const [spiner, setspiner] = useState(false);

  const getCountry = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setcountries(data);
  };
  useEffect(() => {
    getCountry();
  }, []);

  const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggle(`DarkMode <i class="fa fa-moon"></i>`);
      setMode((current) => (current = !current));
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setToggle(`LightMode <i class="fa fa-sun"></i> `);
      setMode((current) => (current = !current));
    }
  };

  const searchCountry = async (term) => {
    if (term.length < 3 || term === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/name/${term}`);
    const data = await res.json();
    setcountries(data);
  };
  const filterByRegion = async (region) => {
    if (region === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    setcountries(data);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div class="fa-3x">
        <i class="fas fa-spinner fa-pulse"></i>
      </div>
      <div className="w-screen shadow-md py-6 md:px-10 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
        <div className="flex container mx-auto">
          <h1 className="font-bold text-xl text-gray-700 dark:text-white">
            Where in the world
          </h1>
          <div className="ml-auto font-medium">
            <button
              className="text-gray-400"
              onClick={() => toggleDarkMode()}
              dangerouslySetInnerHTML={{ __html: toggle }}
            ></button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-10">
        <div className="">
          <i className="fa fa-search my-auto -mr-9 z-10 rounded-md md:pr-2 md:pl-3 md:py-5 text-gray-400 "></i>
          <input
            type="text"
            className="dark:bg-gray-700 dark:text-white outline-none pl-10 p-4 shadow-md rounded-md md:w-1/3 text-gray-700"
            onChange={(term) => searchCountry(term.target.value)}
            placeholder="search for a country..."
          />
        </div>

        <select
          className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700 outline-none dark:text-white text-gray-700 "
          onChange={(val) => filterByRegion(val.target.value)}
        >
          <option value="">Filter by Religion</option>
          <option value="">Africa</option>
          <option value="">Europe</option>
          <option value="">Asia</option>
          <option value="">Oceania</option>
          <option value="">America</option>
        </select>
      </div>

      <div className="grid sm:grid sm:grid-cols-1 md:grid md:grid-cols-3 xl:grid xl:grid-cols-4 gap-16 mx-auto items-center justify-center">
        {country?.map((count, index) => (
          <Link to={{ pathname: "details", state: country }} key={index}>
            <Cards
              title={count.name.common}
              image_url={count.flags}
              population={count.population}
              region={count.region}
              capital={count.capital}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
