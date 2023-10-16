export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  return [...new Set(unique)];
};

export const setBackgroundImage = (url, style) => ({
  backgroundImage: `url(${url})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  ...style,
});

export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// Time ago
export const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " Years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " Months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " Days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " Hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " Minutes";
  }
  return Math.floor(seconds) + " seconds";
};

import {
  format,
  isToday,
  isYesterday,
  isThisWeek,
  isSameWeek,
  parseISO,
} from "date-fns";

export const formatDate = (dateString) => {
  const parsedDate = parseISO(dateString);

  // if (parsedDate !== "Invalid Date") {
  if (isToday(parsedDate)) {
    return `Today at ${format(parsedDate, "hh:mm a")}`;
  } else if (isYesterday(parsedDate)) {
    return `Yesterday at ${format(parsedDate, "hh:mm a")}`;
  } else if (isThisWeek(parsedDate)) {
    // return `${format(parsedDate, "EEEE")} at ${format(parsedDate, "hh:mm a")}`;
    return `${format(parsedDate, "iiii")} at ${format(parsedDate, "hh:mm a")}`;
  } else {
    // return format(parsedDate, "MMM dd, yyyy hh:mm a");
    // return `${format(parsedDate, "EEEE")} at ${format(parsedDate, "hh:mm a")}`;
    return `${format(parsedDate, "MMM d")} at ${format(parsedDate, "hh:mm a")}`;
    // return `${format(parsedDate, "iiii")} at ${format(parsedDate, "hh:mm a")}`;
  }
  // }
};

export const getPage = () => {
  if (typeof window === "undefined") return null;
  const { host } = window.location;
  let isDev = host.includes("localhost");
  let splitHost = host.split(".");

  if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
    let page = splitHost[0];
    if (page === "www") {
      return null;
    }

    return page;
  }
};

// Get page server
export const getPageServer = (host) => {
  let isDev = host.includes("localhost");
  let splitHost = host.split(".");

  if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
    let page = splitHost[0];
    if (page === "www") {
      return null;
    }

    return page;
  }
};

export const showToast = (msg) => {
  alert(msg);
};

const S3_PUBLIC_URL = process.env.S3_PUBLIC_URL;

export const imageGetUrl = (img) => {
  // if img include http or https return img
  // if img not include http or https return img from s3 by prefixing 'https://pub-79fd9107a5234daa92d7ec954f996b35.r2.dev/' + img
  if (img?.includes("http") || img?.includes("https")) {
    return img;
  }

  return `${S3_PUBLIC_URL}/${img}`;
};

function subscribe(eventName, listener) {
  if (typeof window === "undefined") return;
  window.addEventListener(eventName, listener);
}

function unsubscribe(eventName, listener) {
  if (typeof window === "undefined") return;
  window.removeEventListener(eventName, listener);
}

function publish(eventName, data) {
  if (typeof window === "undefined") return;
  const event = new CustomEvent(eventName, { detail: data });
  window.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe };

export const toCent = (amount) => {
  const str = amount.toString();
  const [int] = str.split(".");

  return Number(
    amount
      .toFixed(2)
      .replace(".", "")
      .padEnd(int.length === 1 ? 3 : 4, "0")
  );
};

export const toAmount = ({
  amount,
  amount_type = "dollar",
  local = "en-US",
  currency = "USD",
}) => {
  if (amount_type === "cent") {
    return Number(amount / 100)?.toLocaleString(local, {
      style: "currency",
      currency,
    });
  }

  return Number(amount)?.toLocaleString(local, { style: "currency", currency });
};
