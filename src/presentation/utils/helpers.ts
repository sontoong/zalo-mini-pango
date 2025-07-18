import dayjs from "dayjs";

type Locale = "vi-VN" | "en-US" | "fr-FR" | "ja-JP";

export const formatCurrency = (
  amount: number | string | null | undefined,
  locale: Locale = "vi-VN",
) => {
  if (typeof amount === "string") {
    amount = parseInt(amount);
  }
  let returnAmount = 0;

  if (amount === null || amount === undefined) {
    return returnAmount.toLocaleString(locale, {
      style: "currency",
      currency: "VND",
    });
  }

  if (locale === "vi-VN") {
    returnAmount = amount;
  }

  return returnAmount.toLocaleString(locale, {
    style: "currency",
    currency: "VND",
  });
};

export const formatUnixToLocal = (
  unixTimestamp: number,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  },
  locale: string = "vi-VN",
) => {
  const milliseconds = unixTimestamp;
  const date = new Date(milliseconds);
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const formatDate = (isoString: string) => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
};

export const formatDateToLocal = (
  dateStr?: string,
  includeTime?: boolean,
  locale: string = "vi-VN",
) => {
  if (isNonValue(dateStr)) return "";

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  if (includeTime) {
    const timeOptions: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const formatter = new Intl.DateTimeFormat(locale, timeOptions);
    const formatted = formatter.format(date);

    const formattedWithComma = formatted.replace(
      /(\d{2}:\d{2}:\d{2})\s(\d{2}\/\d{2}\/\d{4})/,
      "$1, $2",
    );
    return formattedWithComma;
  }

  const dayOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, dayOptions);
  return formatter.format(date);
};

export const dateToLocalISOString = (date: dayjs.Dayjs) => {
  const tzOffset = new Date().getTimezoneOffset();
  const dt = dayjs(date).utcOffset(tzOffset, true);
  return dt.toISOString();
};

export const isEmptyObject = (obj?: object) => {
  if (!obj) return 0;

  return Object.keys(obj).length === 0;
};

export function isNonValue(value: unknown): value is undefined | null {
  return (
    value === undefined || value === null || value === "" || Number.isNaN(value)
  );
}
