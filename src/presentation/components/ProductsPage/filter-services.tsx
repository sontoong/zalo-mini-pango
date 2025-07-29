import React, { FC } from "react";
import ServiceImg1 from "../../static/service-1.png";
import ServiceImg2 from "../../static/service-2.png";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CheckIcon from "../../static/icons/tick-circle-icon-green.png";
import clsx from "clsx";

const FilterServiceList = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId") || "";

  return (
    <div className="flex justify-between gap-[20px] px-[16px] hide-scrollbar">
      {services.map((service, index) => (
        <div key={index} className="relative">
          <ServiceItem
            service={service}
            active={(categoryId as unknown as number) == index + 1}
          />
        </div>
      ))}
    </div>
  );
};

const ServiceItem: FC<{ service: Service; active?: boolean }> = ({
  service,
  active,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={clsx("flex flex-col gap-2 border-b-2 pb-2", {
        "border-transparent": !active,
        "border-green5": active,
      })}
      onClick={() => navigate(service.linkTo, { replace: true })}
    >
      <div className="relative">
        <div className="flex size-[48px] items-center justify-center overflow-hidden rounded-full border border-gray1 bg-white">
          <img
            src={service.image}
            alt=""
            className="size-[28px] object-contain"
          />
        </div>
        {active ? (
          <div className="absolute bottom-0 right-0 size-[20px]">
            <img src={CheckIcon} alt="" className="size-full object-cover" />
          </div>
        ) : null}
      </div>
      <div className="text-center text-xs font-medium">{service.name}</div>
    </div>
  );
};

export { FilterServiceList };

type Service = {
  image: string;
  name: string;
  linkTo: string;
};

const services = [
  { image: ServiceImg1, name: "Máy lạnh", linkTo: "/products?categoryId=1" },
  { image: ServiceImg2, name: "Máy giặt", linkTo: "/products?categoryId=2" },
  { image: ServiceImg2, name: "Máy giặt", linkTo: "/products?categoryId=3" },
  { image: ServiceImg2, name: "Máy giặt", linkTo: "/products?categoryId=4" },
  { image: ServiceImg2, name: "Máy giặt", linkTo: "/products?categoryId=5" },
];
