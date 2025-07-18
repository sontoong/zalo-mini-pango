import React from "react";
import { SearchBar } from "../common/search-bar";
import SearchIcon from "../../static/icons/search-icon-green.png";

const SearchSection = () => {
  return (
    <div
      className="sticky top-0 z-10 bg-white p-[10px]"
      style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
    >
      <SearchBar
        placeholder="Tìm dịch vụ, sản phẩm"
        options={options}
        className="h-[44px] rounded-[8px] text-sm font-normal"
      />
    </div>
  );
};

export default SearchSection;

const options = [
  { label: "Tủ lạnh Toshiba", value: "Tủ lạnh Toshiba" },
  { label: "Tủ lạnh Inverted", value: "Tủ lạnh Inverted" },
  { label: "Tủ lạnh 2 cánh", value: "Tủ lạnh 2 cánha" },
];
