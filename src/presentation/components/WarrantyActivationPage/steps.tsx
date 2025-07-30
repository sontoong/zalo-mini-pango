import React, { useState } from "react";
import { SearchForm } from "./search-form";
import clsx from "clsx";
import { WarrantySignUpForm } from "./warranty-sign-up-form";
import { Steps } from "../common/steps";
import { Form } from "../common/form";
import { Button } from "../common/button";
import ChevronLeft from "../../static/icons/chevron-left.png";
import MessageIcon from "../../static/icons/message-icon-green.png";
import { SearchResult } from "./search-result";
import { Checkbox } from "../common/checkbox";
import { useNavigate } from "react-router-dom";

const activated = false;

const FormContainer = () => {
  const navigate = useNavigate();
  const [searchForm] = Form.useForm();
  const [searchResultForm] = Form.useForm();
  const [warrantySignUpForm] = Form.useForm();

  const [current, setCurrent] = useState<number>(0);
  const [finish, setFinish] = useState<boolean>(false);
  const [acceptPolicy, setacceptPolicy] = useState(false);

  const goNext = () => {
    setCurrent((prev) => prev + 1);
  };

  const onChange = (clickedIndex: number) => {
    if (!finish && clickedIndex > current) {
      return;
    }
    setCurrent(clickedIndex);
  };

  const steps = [
    {
      title: "Tra cứu",
      content: <SearchForm form={searchForm} />,
    },
    {
      title: "Kết quả tra cứu",
      content: <SearchResult form={searchResultForm} />,
    },
    {
      title: "Kích hoạt",
      content: <WarrantySignUpForm form={warrantySignUpForm} />,
    },
  ];

  return (
    <Form.Provider
      onFormFinish={(name) => {
        if (name === "searchForm") {
          if (finish) {
            setFinish(false);
          }
          goNext();
        }
        if (name === "searchResultForm") {
          if (finish) {
            setFinish(false);
          }
          goNext();
        }
        if (name === "warrantySignUpForm") {
          navigate("/warranty-activate-success");
        }
      }}
    >
      <div className="relative flex h-full flex-col gap-2">
        <div className="sticky top-0 bg-white py-3">
          <Steps
            onChange={onChange}
            current={current}
            items={steps}
            setStatus={({ item, index }) => {
              return finish
                ? index === current
                  ? "active"
                  : "completed"
                : null;
            }}
            render={({ item, index, itemStatus }) => (
              <>
                {itemStatus === "active" ? (
                  <div className="whitespace-nowrap border-b-2 border-green7 text-sm font-medium text-green7">
                    {`${index + 1}. ${item.title}`}
                  </div>
                ) : (
                  <div className="whitespace-nowrap text-sm font-medium text-gray5">
                    {`${index + 1}. ${item.title}`}
                  </div>
                )}
              </>
            )}
            divider={
              <div className="mx-[4px] size-[18px] p-[2px]">
                <img
                  src={ChevronLeft}
                  alt=""
                  className="size-full rotate-180 object-cover"
                />
              </div>
            }
          />
        </div>
        {/* Render content for each step */}
        <div className="pb-[150px]">{steps[current]?.content}</div>
        <div
          className={clsx(
            "fixed inset-x-0 bottom-0 bg-white px-[16px] pb-[24px] pt-[12px]",
            { hidden: current > steps.length - 1 },
          )}
          style={{ boxShadow: " 0px -4px 24px 0px #A6A6A614" }}
        >
          {current === 0 && (
            <Button
              text={
                <div className="text-lg font-medium text-white">Tra cứu</div>
              }
              className="h-[50px] w-full rounded-[12px] bg-green6"
              onClick={() => {
                searchForm.submit();
              }}
            />
          )}
          {current === 1 ? (
            !activated ? (
              <Button
                text={
                  <div className="text-lg font-medium text-white">Tra cứu</div>
                }
                className="h-[50px] w-full rounded-[12px] bg-green6"
                onClick={() => {
                  searchResultForm.submit();
                }}
              />
            ) : (
              <div className="flex flex-col gap-[10px]">
                <Button
                  text={
                    <div className="text-lg font-medium text-white">
                      Tra cứu
                    </div>
                  }
                  className="h-[50px] w-full flex-none rounded-[12px] bg-green6"
                  onClick={() => {
                    searchResultForm.submit();
                  }}
                />
                <Button
                  text={
                    <div className="flex items-center justify-center gap-[10px]">
                      <div className="text-lg font-medium text-green6">
                        Liên hệ hỗ trợ
                      </div>
                      <img
                        src={MessageIcon}
                        alt=""
                        className="size-[20px] object-cover"
                      />
                    </div>
                  }
                  className="h-[50px] w-full flex-none rounded-[12px] border-[1.5px] border-green6 bg-white"
                />
              </div>
            )
          ) : null}
          {current === 2 && (
            <div className="flex flex-col gap-[10px]">
              <Checkbox onChange={(e) => setacceptPolicy(e.target.checked)}>
                Tôi đã đọc và đồng ý với các điều khoản và điều kiện chương
                trình bảo hành điện tử AQUA{" "}
              </Checkbox>
              <Button
                text={
                  <div className="text-lg font-medium text-white">Tra cứu</div>
                }
                className={clsx(
                  "h-[50px] w-full flex-none rounded-[12px] bg-gray1",
                  { "bg-green6": acceptPolicy },
                )}
                onClick={() => {
                  warrantySignUpForm.submit();
                }}
                disabled={!acceptPolicy}
              />
            </div>
          )}
        </div>
      </div>
    </Form.Provider>
  );
};

export default FormContainer;
