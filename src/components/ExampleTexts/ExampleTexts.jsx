import "./ExampleTexts.css";

import { ConvertFinalText } from "../../utils/functions";

const ExampleTexts = () => {
  const textsArray = [
    [
      "&7&kt&r",
      "&f&kt&r",
      "&e$",
      "&f&kt&r",
      "&7&kt&r",
      "&6&l L&r",
      "&e&la &r",
      "&6&lF&r",
      "&e&lraude &r",
      "&6&lF&r",
      "&e&liscale &r",
      "&7&kt&r",
      "&f&kt&r",
      "&e$",
      "&f&kt&r",
      "&7&kt&r",
    ],
    [
      "&b&kt&r",
      "&f&kt&r",
      "&9☛",
      "&b❤",
      "&9☚",
      "&f&kt&r",
      "&b&kt&r",
      "&9  (╯°□°)╯︵ ┻━┻  ",
      "&b&kt&r",
      "&f&kt&r",
      "&9☛",
      "&b❤",
      "&9☚",
      "&f&kt&r",
      "&b&kt&r",
    ],
    [
      "&4&kt&r",
      "&c&kt&r",
      "&f✯",
      "&c&kt&r",
      "&4&kt&r",
      "&c&l S&r",
      "&4&la&r",
      "&c&lb&r",
      "&4&lr&r",
      "&c&le L&r",
      "&4&la&r",
      "&c&ls&r",
      "&4&le&r",
      "&c&lr &r",
      "&4&kt&r",
      "&c&kt&r",
      "&f✯",
      "&c&kt&r",
      "&4&kt&r",
    ],
    [
      "&7&kt&r",
      "&f&kt&r",
      "&d❰",
      "&f⚔",
      "&d❱",
      "&f&kt&r",
      "&7&kt&r",
      "&d&l  天羽々斬  &r",
      "&7&kt&r",
      "&f&kt&r",
      "&d❰",
      "&f⚔",
      "&d❱",
      "&f&kt&r",
      "&7&kt&r",
    ],
  ];

  const handleCopy = (i) => {
    const text = textsArray[i].join('');
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="footer">
      <h6>Exemples de noms :</h6>
      {textsArray.map((texts, index) => (
        <div className="final-txt" key={index}>
          <small className="exemple-copy" onClick={() => handleCopy(index)}>
            {texts.map((t, i) => (
              <ConvertFinalText text={t} key={i} />
            ))}
          </small>
        </div>
      ))}
    </div>
  );
};

export default ExampleTexts;
