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

export const calculateNights = (checkIn: string, checkOut: string): number => {
  // Parse the dates as Date objects
  const checkInDate: Date = new Date(checkIn);
  const checkOutDate: Date = new Date(checkOut);

  // Ensure both variables are Date objects
  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
    throw new Error("Invalid date format. Please provide valid dates.");
  }

  // Calculate the difference in milliseconds
  const differenceInMilliseconds: number =
    checkOutDate.getTime() - checkInDate.getTime();

  // Convert milliseconds to days
  const numberOfNights: number =
    differenceInMilliseconds / (1000 * 60 * 60 * 24);

  // Ensure the result is a whole number
  return Math.floor(numberOfNights);
};
