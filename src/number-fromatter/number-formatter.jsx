/**
 *
 * @param {Decimal Value} value: This is the amount which the user will input for formatting
 * @param {Number} decimal: This value will denote the number of decimals to display
 * @returns
 */
const NumberFormatter = (value, decimal) => {
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

export default NumberFormatter;
