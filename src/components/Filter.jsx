import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Select } from "antd";

const { Search } = Input;
const Filter = ({ memorizedMovies: { myMemorizedMovies }, setMyMovies }) => {
  // filter by Rate here ============================================================
  const filterByRate = (rate) => {
    let filteredMovies = myMemorizedMovies.filter(
      (item) => item.rating === Number(rate)
    );
    setMyMovies(filteredMovies);
  };
  // filter search ====================================================================
  const filterBySearch = (value) => {
    let filteredMovies = myMemorizedMovies.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase().trim())
    );
    setMyMovies(filteredMovies);
  };
  return (
    <div>
      <Search
        placeholder="Search for movie"
        style={{ width: 250 }}
        onSearch={(value) => filterBySearch(value)}
        enterButton
      />

      {/* for filter ====================================================================*/}
      <Select
        className="pl-2"
        defaultValue="Filter by rating"
        style={{ width: 120 }}
        onChange={(value) => filterByRate(value)}
        options={[
          { value: "1", label: "⭐" },
          { value: "2", label: "⭐⭐" },
          { value: "3", label: "⭐⭐⭐" },
          { value: "4", label: "⭐⭐⭐⭐" },
        ]}
      />
    </div>
  );
};

export default Filter;
