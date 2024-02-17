export const compactNumber = (number = Number) => {
  const suffixes = ["", "K", "M", "B", "T", "Q"];
  let suffixNum = Math.floor(("" + number).length / 3);
  
  let shortValue = parseFloat((suffixNum !== 0 ? (number / Math.pow(1000, suffixNum)) : number).toPrecision(4));
  
  if (shortValue % 1 !== 0) {
      shortValue = shortValue.toFixed(3);
  }
  
  if (shortValue < 1 && suffixNum > 0) {
      shortValue *= 1000;
      suffixNum--;
  }

  return shortValue + suffixes[suffixNum];
};

export const formatNumberWithSpaces = (number = 0) => {
  const numberString = number.toString();
  const groups = [];
  for (let i = numberString.length; i > 0; i -= 3) {
    groups.unshift(numberString.substring(Math.max(0, i - 3), i));
  }
  return groups.join(' ');
}
