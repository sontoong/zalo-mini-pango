import React, { useEffect, useState } from "react";
import { Button } from "../common/button";
import clsx from "clsx";
import { TechnicalInformation } from "./technical-information";
import { WarrantyInformation } from "./warranty-information";
import { useNavigate, useSearchParams } from "react-router-dom";

export const InformationTabs = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || tabs[0].key;

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [window.location.hash]);

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex h-[43px] gap-[12px] px-[16px]">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            text={
              <div
                className={clsx("text-base font-medium text-gray8", {
                  "font-semibold text-purple7": tab.key === currentTab,
                })}
              >
                {tab.title}
              </div>
            }
            className={clsx(
              "rounded-[8px] border-[1.5px] border-gray2 bg-white",
              {
                "!border-purple5 !bg-purple1": tab.key === currentTab,
              },
            )}
            onClick={() =>
              navigate(`/products/1?tab=${tab.key}#${tab.key}`, {
                replace: true,
              })
            }
          />
        ))}
      </div>
      <div className="flex flex-col gap-[20px] pb-[150px]">
        <TechnicalInformation />
        <WarrantyInformation />
      </div>
    </div>
  );
};

const tabs = [
  {
    title: "Thông số kỹ thuật",
    key: "techinical-information",
  },
  {
    title: "Thông tin bảo hành",
    key: "warranty-information",
  },
];
