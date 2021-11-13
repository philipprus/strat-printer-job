export const getRootUrl = () => {
  const dev = process.env.NODE_ENV !== "production";
  const ROOT_URL = dev
    ? process.env.REACT_APP_SERVER_PORT
    : process.env.PRODUCTION_URL_APP;

  return ROOT_URL;
};
