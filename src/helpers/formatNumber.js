module.exports = (number) => {
  let data = new Intl.NumberFormat("id-ID");
  return data.format(number);
};
