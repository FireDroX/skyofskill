export const compactNumber = (number = Number) => {
  const suffixes = ["", "K", "M", "B", "T", "Q"];
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

  if (groups.length > 5) return "That number is too big...";
  else return groups.join(" ");
};

export const ConvertFinalText = ({ text = String }) => {
  const split = Array.from(text.split(/([&].)/g).filter(Boolean));
  let newText = String;
  const replacedArray = Array.from(
    split.map((item) => {
      switch (item) {
        case "&0":
          return "color-black";

        case "&1":
          return "color-dark_blue";

        case "&2":
          return "color-dark_green";

        case "&3":
          return "color-dark_aqua";

        case "&4":
          return "color-dark_red";

        case "&5":
          return "color-dark_purple";

        case "&6":
          return "color-gold";

        case "&7":
          return "color-gray";

        case "&8":
          return "color-dark_gray";

        case "&9":
          return "color-blue";

        case "&a":
          return "color-green";

        case "&b":
          return "color-aqua";

        case "&c":
          return "color-red";

        case "&d":
          return "color-light_purple";

        case "&e":
          return "color-yellow";

        case "&f":
          return "color-white";

        case "&l":
          return "color-bold";

        case "&m":
          return "color-strikethrough";

        case "&n":
          return "color-underline";

        case "&o":
          return "color-italic";

        case "&r":
          return "";

        default:
          newText = item;
          return;
      }
    })
  );

  return (
    <span className={replacedArray.join(" ").trim()} key={replacedArray.length}>
      {newText}
    </span>
  );
};