import React from "react";
import ScanIcon from "../../static/icons/scan-icon-green.png";
import { SearchBarNoPopup } from "../common/search-bar";

const SearchBar = () => {
  return (
    <SearchBarNoPopup
      placeholder="Nhập thông tin hoặc quét mã để  tìm sản phẩm"
      suffixIcon={<img src={ScanIcon} className="size-[24px] object-cover" />}
      className="h-[50px] text-xs"
    />
  );
};

export { SearchBar };
