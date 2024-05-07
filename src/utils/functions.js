export const compactNumber = (number = Number) => {
  const suffixes = ["", "K", "M", "B", "T", "Q", "Qu"];
  let suffixNum = Math.floor(("" + number).length / 3);

  let shortValue = parseFloat(
    (suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(
      3
    )
  );

  if (shortValue % 1 !== 0 && !(shortValue < 1 && suffixNum > 0))
    shortValue = shortValue.toFixed(1);

  if (shortValue < 1 && suffixNum > 0) {
    shortValue = shortValue.toFixed(3);
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

  // if (groups.length > 5) return "That number is too big...";
  // else return groups.join(" ");

  return groups.join(" ");
};

export const numberToMonth = (number = Number) => {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  if (number >= 1 && number <= 12) return months[number - 1];
  else return months[0];
};

export const findHexCharacters = (inputString) => {
  if ([undefined, ""].includes(inputString)) return ["4", "c"];
  const hexCharacters = inputString.match(/[0-9a-fA-F]{1,2}/g);
  return hexCharacters ? hexCharacters.map((hex) => hex.substring(0, 2)) : [];
};

export const romanToNumber = (roman) => {
  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
  };

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    if (romanNumeralMap[roman[i]] < romanNumeralMap[roman[i + 1]]) {
      result -= romanNumeralMap[roman[i]];
    } else {
      result += romanNumeralMap[roman[i]];
    }
  }
  return result;
};

export const extractAndConvertEnchantLevel = (item) => {
  const enchantLevel = item.enchants[0]
    .replace(/&[0-9a-fA-Fr]/g, "")
    .split(" ")[1];
  return isNaN(enchantLevel)
    ? romanToNumber(enchantLevel)
    : parseInt(enchantLevel);
};

export const checkItemType = (item, searchType) => {
  switch (searchType) {
    case "pioche":
      return item.type === 7;
    case "arc":
      return item.type === 6;
    case "hache":
      return item.type === 5;
    case "épée":
      return item.type === 4;
    case "bottes":
      return item.type === 3;
    case "pantalon":
      return item.type === 2;
    case "plastron":
      return item.type === 1;
    case "casque":
      return item.type === 0;
    case "all":
      return true;
    default:
      return false;
  }
};

export const filterItems = (item, search) => {
  const itemNameMatches = item.defaultName.toLowerCase().match(search);
  const itemTypeMatches = checkItemType(item, search.split(":")[1]);
  return itemNameMatches || itemTypeMatches;
};