import "./MinecraftColoredText.css";
import { useState, useEffect } from "react";

import { convertFinalText } from "../../utils/functions";

const MinecraftColoredText = () => {
  const [isPrefix, setIsPrefix] = useState(false);
  const [text, setText] = useState("");
  const [finalText, setFinalText] = useState(["&fHello&r", "&4&l World&r"]);

  const handleInputChange = (e) => setText(e.target.value);

  const handleReset = () => {
    setText("");
    setFinalText([]);
  };

  const handleAdd = () => {
    const prefix = isPrefix ? "§" : "&";
    const checkboxesColors = document.querySelectorAll(
      '.btns-colors input[type="checkbox"]'
    );
    const checkboxesFormat = document.querySelectorAll(
      '.btns-format input[type="checkbox"]'
    );
    const checkboxes = [...checkboxesColors, ...checkboxesFormat].filter(
      (checkbox) => checkbox.checked
    );

    const newText = Array.from([text]);
    checkboxes.toReversed().map(({ id }) => {
      if (
        ["l", "m", "n", "o"].includes(id) &&
        newText[newText.length - 1] !== prefix + "r"
      ) {
        newText.push(prefix + "r");
      }
      newText.unshift(prefix + id);

      return true;
    });

    setFinalText([...finalText, newText.join("")]);
    setText("");
  };

  useEffect(() => {
    const checkboxes = document.querySelectorAll(
      '.btns-colors input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          checkboxes.forEach((cb) => {
            if (cb !== this) {
              cb.checked = false;
            }
          });
        }
      });
    });
  }, []);

  return (
    <div className="minecraft-colors">
      <div className="minecraft-txt">
        <div>
          <small style={{ color: "var(--text85)" }}>
            Mot ou Caractère à ajouter
          </small>
          <input
            name="Mot / Caractère à ajouter"
            type="text"
            value={text}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="btns-selector">
          <button onClick={handleAdd}>Add</button>
          <div className="prefix-selector">
            <h6 style={{ color: isPrefix ? "var(--text45)" : "red" }}>&</h6>
            <label className="txt-switch">
              <input
                type="checkbox"
                name="Prefix"
                onChange={() => setIsPrefix(!isPrefix)}
              />
              <span className="txt-slider txt-round"></span>
            </label>
            <h6 style={{ color: isPrefix ? "red" : "var(--text45)" }}>§</h6>
          </div>
        </div>
        <div className="final-txt">
          <small>{finalText.map((t) => convertFinalText(t))}</small>
          <small className="txt-copy">{finalText.join("")}</small>
        </div>
      </div>
      <div className="minecraft-btns">
        <div className="btns-colors">
          <input type="checkbox" id="0" className="mc-black" />
          <input type="checkbox" id="1" className="mc-dark_blue" />
          <input type="checkbox" id="2" className="mc-dark_green" />
          <input type="checkbox" id="3" className="mc-dark_aqua" />
          <input
            type="checkbox"
            id="4"
            className="mc-dark_red"
            defaultChecked={true}
          />
          <input type="checkbox" id="5" className="mc-dark_purple" />
          <input type="checkbox" id="6" className="mc-gold" />
          <input type="checkbox" id="7" className="mc-gray" />
          <input type="checkbox" id="8" className="mc-dark_gray" />
          <input type="checkbox" id="9" className="mc-blue" />
          <input type="checkbox" id="a" className="mc-green" />
          <input type="checkbox" id="b" className="mc-aqua" />
          <input type="checkbox" id="c" className="mc-red" />
          <input type="checkbox" id="d" className="mc-light_purple" />
          <input type="checkbox" id="e" className="mc-yellow" />
          <input type="checkbox" id="f" className="mc-white" />
        </div>
        <div className="btns-format">
          <input type="checkbox" id="l" className="mc-bold" />
          <input type="checkbox" id="m" className="mc-strikethrough" />
          <input type="checkbox" id="n" className="mc-underline" />
          <input type="checkbox" id="o" className="mc-italic" />
        </div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default MinecraftColoredText;
