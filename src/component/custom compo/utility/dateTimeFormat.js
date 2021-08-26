export const DateTimeFormat = (dateData) => {
  let date = new Date(dateData);

  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var months =
    date.getMonth() + 1 < 9
      ? "0" + parseInt(date.getMonth() + 1)
      : date.getMonth() + 1;

  var year = date.getFullYear();

  return year + "-" + months + "-" + day;
};
