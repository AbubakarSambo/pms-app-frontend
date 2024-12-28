// write a function to parse numbers and add commas to them
export const numberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// write a function to parse an endpoint url and only attach query params if thevalue exists
export const parseUrl = (url: string, params: any) => {
  const keys = Object.keys(params);
  let newUrl = url;
  keys.forEach((key) => {
    if (params[key]) {
      newUrl += newUrl.includes("?")
        ? `&${key}=${params[key]}`
        : `?${key}=${params[key]}`;
    }
  });
  return newUrl;
};
