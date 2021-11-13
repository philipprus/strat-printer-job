export const formatSeconds = (secs: number) => {
  const pad = (n: number) => {
    return n < 10 ? "0" + n : n;
  };

  var h = Math.floor(secs / 3600);
  var m = Math.floor(secs / 60) - h * 60;

  return `${pad(h)}h ${pad(m)}m`;
};

export const getDate = () => {
  var today = new Date();

  return today.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric"
  });
};
