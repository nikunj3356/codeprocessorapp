function time_stamp() {
  const dt = new Date();
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  const seconds = dt.getSeconds();
  const year = dt.getFullYear();
  const date = ("0 " + dt.getDate()).slice(-2);
  const month = ("0" + (dt.getMonth() + 1)).slice(-2);
  const output =
    year +
    "-" +
    month +
    "-" +
    date +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  return output;
}
module.exports = { time_stamp };
