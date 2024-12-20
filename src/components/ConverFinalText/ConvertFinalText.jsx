const ConvertFinalText = ({ text = "" }) => {
  const split = Array.from(text.split(/([&].)/g).filter(Boolean));
  let newText = "";
  let obfuscatedText = false;
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

        case "&k":
          obfuscatedText = true;
          return "mc-obfuscated";

        case "&r":
          obfuscatedText = false;
          return "";

        default:
          newText = obfuscatedText ? "" : item;
          return newText;
      }
    })
  );

  return (
    <span className={replacedArray.join(" ").trim()} key={replacedArray.length}>
      {newText}
    </span>
  );
};

export default ConvertFinalText;
