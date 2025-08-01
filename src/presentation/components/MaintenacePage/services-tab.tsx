import React, { FC, useState } from "react";
import ServiceList from "./service-list";
import Filters from "./filters";
import { CartFloatButton } from "../cart";

const ServicesTab: FC<Props> = ({ scrollY, currentTab, setCurrentTab }) => {
  const [searched, setSearched] = useState<boolean>(false);

  return (
    <>
      <Filters
        searched={searched}
        handleHideOnSearch={setSearched}
        scrollY={scrollY}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <ServiceList searched={searched} />
      <CartFloatButton />
    </>
  );
};

export default ServicesTab;

type Props = {
  scrollY: number;
  currentTab: string;
  setCurrentTab: any;
};
