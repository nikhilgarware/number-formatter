/**
 * When passed a large number this package will format it in thousand's format depending on regious you provide(line 11)
 * @param {Decimal Value} value: This is the amount which the user will input for formatting
 * @param {Number} decimal: This value will denote the number of decimals to display
 * @returns
 */
const thousandSeperator = (value, decimal) => {
  const decimalFormattedValue = parseFloat(
    parseFloat(value).toFixed(decimal)
  ).toLocaleString(
    "en-In", // this is the region according to which the number will be formatted
    {
      useGrouping: true,
    }
  );
  return decimalFormattedValue;
};

export default thousandSeperator;
