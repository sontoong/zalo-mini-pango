import React from "react";
import { SearchBar as OriginalSearchBar } from "../common/search-bar";
import ScanIcon from "../../static/icons/scan-icon-green.png";

const SearchBar = () => {
  return (
    <OriginalSearchBar
      placeholder="Nhập thông tin hoặc quét mã để  tìm sản phẩm"
      suffixIcon={<img src={ScanIcon} className="size-[24px] object-cover" />}
      className="h-[50px] text-xs"
    />
  );
};

export { SearchBar };
