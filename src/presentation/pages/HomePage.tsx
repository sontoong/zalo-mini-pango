import React, { FC } from "react";
import { Page } from "zmp-ui";
import { Button } from "../components/common/button";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-[#fafbff]">
      <div className="flex flex-col gap-[16px] p-[16px]">
        <Button text="Mua dịch vụ" onClick={() => navigate("/services")} />
        <Button text="Bảo dưỡng" onClick={() => navigate("/maintenance")} />
        <Button text="Đặt lịch bảo dưỡng" onClick={() => navigate("/order")} />
        <Button
          text="Hỗ trợ kỹ thuật"
          onClick={() => navigate("/technical-support")}
        />
        <Button text="Bảo hành" onClick={() => navigate("/warranty")} />
        <Button text="Đặt hàng" onClick={() => navigate("/history")} />
      </div>
    </Page>
  );
};

export default HomePage;
