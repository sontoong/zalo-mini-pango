import { AutoComplete, AutoCompleteProps, ConfigProvider, Input } from "antd";
import React, {
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
  FC,
} from "react";
import CloseIcon from "../../static/icons/close-circle-icon.png";
import SearchIcon from "../../static/icons/search-icon-green.png";

export interface SearchBarRef {
  dropdownHeight: number | null;
  measureDropdownHeight: () => void;
}

type SearchBarProps = {
  placeholder?: string;
  className?: string;
  extraMenuRender?: React.ReactNode;
  value?: any;
  onChange?: any;
  onSubmit?: any;
} & AutoCompleteProps;

const SearchBar = React.forwardRef<SearchBarRef, SearchBarProps>(
  (
    {
      placeholder,
      className,
      options,
      extraMenuRender,
      value = "",
      onChange,
      suffixIcon,
      prefix,
      allowClear = {
        clearIcon: <img src={CloseIcon} className="size-[24px] object-cover" />,
      },
      onSearch,
      onClear,
      ...props
    },
    ref,
  ) => {
    return (
      <ConfigProvider theme={{ components: { Select: { zIndexPopup: 0 } } }}>
        <AutoComplete
          optionRender={(option) => (
            <div className="py-[3px]">
              <div className="text-sm font-normal">{option.label}</div>
            </div>
          )}
          getPopupContainer={(trigger) => trigger.parentNode}
          styles={{
            popup: {
              root: {
                left: 0,
                top: "120%",
                zIndex: 20,
              },
            },
          }}
          filterOption={(inputValue, option) => {
            if (typeof option?.value === "string") {
              return (
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              );
            }
            return (
              String(option?.value || "")
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            );
          }}
          className="customSelect flex size-full justify-center"
          options={options}
          value={value}
          onChange={onChange}
          {...props}
        >
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  // activeShadow: "0 0 0 1px #3dac78",
                },
              },
            }}
          >
            <Input
              placeholder={placeholder}
              prefix={prefix}
              suffix={
                suffixIcon ? (
                  suffixIcon
                ) : (
                  <img
                    src={SearchIcon}
                    alt=""
                    className="size-[24px] object-cover"
                  />
                )
              }
              className={`z-10 text-sm font-normal ${className}`}
              allowClear={allowClear as { clearIcon: React.ReactNode }}
              onClear={onClear}
              value={value}
              onChange={onChange}
            />
          </ConfigProvider>
        </AutoComplete>
      </ConfigProvider>
    );
  },
);

const SearchBarNoPopup: FC<SearchBarProps> = ({
  placeholder,
  prefix,
  suffixIcon,
  className,
  allowClear = {
    clearIcon: <img src={CloseIcon} className="size-[24px] object-cover" />,
  },
  onClear,
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            // activeShadow: "0 0 0 1px #3dac78",
          },
        },
      }}
    >
      <Input
        placeholder={placeholder}
        prefix={prefix}
        suffix={
          suffixIcon ? (
            suffixIcon
          ) : (
            <img
              src={SearchIcon}
              alt=""
              className="size-[24px] object-cover"
              onClick={onSubmit}
            />
          )
        }
        className={`z-10 text-sm font-normal ${className}`}
        allowClear={allowClear as { clearIcon: React.ReactNode }}
        onClear={onClear}
        value={value}
        onChange={onChange}
      />
    </ConfigProvider>
  );
};

export { SearchBar, SearchBarNoPopup };
