import React, { FC } from "react";
import { Radio } from "../common/radio";
import { Form } from "../common/form";
import { Tag } from "../common/tag";
import { historyStatus } from "../../constants/history-status";
import { Divider } from "antd";
import { formatCurrency } from "../../utils/helpers";
import ZaloPayLogo from "../../static/zalo-pay-logo.png";
import { useNavigate } from "react-router-dom";

const HistoryList: FC<{ showTypeFilter: boolean }> = ({ showTypeFilter }) => {
  const [form] = Form.useForm();

  const initialValues = {
    status: "1",
  };

  return (
    <Form form={form} initialValues={initialValues}>
      <div className="flex flex-col gap-[14px]">
        {showTypeFilter ? (
          <Form.Item name="status" noStyle>
            <Radio.ButtonGroup
              items={statusList}
              render={(status) => (
                <div className="flex h-full items-center justify-center rounded-[40px] border border-green5 bg-white px-[12px]">
                  <span className="text-xs font-medium leading-[120%] text-green6">
                    {status?.label}
                  </span>
                </div>
              )}
              activeRender={(status) => (
                <div className="flex h-full items-center justify-center rounded-[40px] border border-green5 bg-green5 px-[12px]">
                  <span className="text-xs font-medium leading-[120%] text-white">
                    {status?.label}
                  </span>
                </div>
              )}
              className="flex h-[30px] gap-[8px]"
              itemFlex={false}
            />
          </Form.Item>
        ) : null}
        <div className="flex flex-col gap-[12px]">
          <HistoryListItem type="3" status="1" paid={false} />
          <HistoryListItem type="1" status="2" paid={true} />
          <HistoryListItem type="2" status="2" paid={true} />
        </div>
      </div>
    </Form>
  );
};

const HistoryListItem: FC<{ type: string; status: string; paid: boolean }> = ({
  type,
  status,
  paid,
}) => {
  const navigate = useNavigate();
  const itemType = historyStatus[type];
  const itemStatus = itemType[status];

  return (
    <div
      className="flex flex-col gap-[12px] rounded-[12px] border border-gray1 bg-white px-[14px] py-[12px]"
      onClick={() => navigate("/history/1")}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <img
            src={itemType.icon}
            alt=""
            className="size-[28px] object-cover"
          />
          <div className="text-sm font-medium text-gray6">
            Đơn hàng: <span className="font-normal text-black">#12434</span>
          </div>
        </div>
        <Tag
          className="m-0 flex h-[25px] items-center justify-center rounded-[24px]"
          style={{
            background: itemStatus.bgColor,
            borderColor: itemStatus.borderColor,
            color: itemStatus.color,
          }}
        >
          <div className="text-xs font-semibold">{itemStatus.label}</div>
        </Tag>
      </div>
      <div className="flex flex-col gap-[12px]">
        {/* Item list */}
        <div className="flex flex-col gap-[12px]">
          {/* Item */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between gap-[30px]">
              <div className="text-sm font-semibold">
                Máy lạnh Toshiba Inverter 1 HP RAS-H10E2KCVG-V
              </div>
              <div className="text-xs font-medium text-gray5">x1</div>
            </div>
            <div className="text-sm font-semibold text-gray7">
              {formatCurrency(9000000)}
            </div>
          </div>
          <Divider className="m-0" />
          {/* Item */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between gap-[30px]">
              <div className="text-sm font-semibold">
                Máy giặt toshiba KNC-12344
              </div>
              <div className="text-xs font-medium text-gray5">x1</div>
            </div>
            <div className="text-sm font-semibold text-gray7">
              {formatCurrency(9000000)}
            </div>
          </div>
        </div>
        {/* Footer */}
        <Divider className="m-0" />
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[2px]">
            {!paid ? (
              <div className="text-xs font-semibold text-gray6">
                Chưa thanh toán:
              </div>
            ) : (
              <div className="flex items-center gap-[8px]">
                <img
                  src={ZaloPayLogo}
                  alt=""
                  className="size-[18px] rounded-[4px] border border-gray1 object-cover"
                />
                <div className="text-xs font-semibold text-green6">
                  Đã thanh toán
                </div>
              </div>
            )}
            <div className="text-xs font-semibold text-gray7">
              Tổng:{" "}
              <span className="text-red6">{formatCurrency(20000000)}</span>
            </div>
          </div>
          <div className="text-[11px] font-medium text-gray7">
            Ngày đặt: 15:43, 25/5/25
          </div>
        </div>
      </div>
    </div>
  );
};

export { HistoryList };

const statusList = [
  { label: "Tất cả", value: "1" },
  { label: "Chờ xác nhận", value: "2" },
  { label: "Đã xác nhận", value: "3" },
];
