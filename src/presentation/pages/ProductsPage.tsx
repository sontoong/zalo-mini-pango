import React, { useEffect, useState } from "react";
import { Header, Page } from "zmp-ui";
import { CallSupport } from "../components/support";
import ArrowLeftIcon from "../static/icons/arrow-left.png";
import { useSearchParams } from "react-router-dom";
import {
  ProductsPageTabBuy,
  ProductsPageTabOrder,
} from "../components/ProductsPage";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "buy";

  const [currentTab, setCurrentTab] = useState<string>(tab);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollTop = event.target.scrollTop;
      setScrollY(scrollTop);
    };

    const scrollContainer = document.querySelector(
      ".productspage-scroll-container",
    );

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.log("Scroll container not found");
      return;
    }
  }, []);

  const tabs = {
    buy: (
      <ProductsPageTabBuy
        scrollY={scrollY}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    ),
    history: (
      <ProductsPageTabOrder
        scrollY={scrollY}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    ),
  };

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div>Mua hàng</div>
              <CallSupport />
            </div>
          ) as unknown as string
        }
        className="topbar h-auto flex-none"
        backIcon={
          <div className="absolute inset-1/2 flex size-[16px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full">
            <img src={ArrowLeftIcon} className="size-full object-cover" />
          </div>
        }
      />
      <div className="productspage-scroll-container flex-1 overflow-auto bg-surface hide-scrollbar">
        {tabs[currentTab]}
      </div>
    </Page>
  );
};

export default ProductsPage;
