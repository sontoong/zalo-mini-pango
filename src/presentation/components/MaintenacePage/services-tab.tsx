import React, { useState } from "react";
import ServiceList from "./service-list";
import Filters from "./filters";
import { CartFloatButton } from "../cart";

const ServicesTab = () => {
  const [searched, setSearched] = useState<boolean>(false);

  return (
    <>
      <Filters searched={searched} handleHideOnSearch={setSearched} />
      <ServiceList searched={searched} />
      <CartFloatButton />
    </>
  );
};

export default ServicesTab;
