import { useState, useEffect } from "react";
import "./Home.css";

import { convertFinalText } from "../../utils/functions";

// FIXME: Underline and Strokethrough not working together

const Home = () => {
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
    <section className="App">
      <div>
        <div className="txt-minage">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="var(--text85)"
              stroke="none"
            >
              <path
                d="M3117 4277 l-37 -32 64 -77 c297 -355 453 -745 407 -1012 -27 -157
                            -80 -234 -197 -287 -98 -44 -208 -59 -524 -69 -375 -12 -493 -29 -618 -88 -81
                            -37 -173 -131 -200 -204 -49 -131 -51 -261 -6 -396 13 -40 24 -74 24 -77 0 -2
                            -35 -30 -77 -62 -191 -142 -495 -474 -643 -702 -15 -23 -16 -22 -125 110 -149
                            180 -138 168 -131 146 3 -11 11 -83 16 -160 11 -153 1 -388 -25 -558 -7 -52
                            -12 -95 -10 -97 2 -2 32 19 67 46 152 120 408 271 568 337 l82 33 -49 10 c-26
                            5 -104 20 -173 32 -69 13 -129 26 -133 30 -20 18 215 313 383 480 105 106 285
                            260 303 260 3 0 38 -34 78 -76 202 -208 539 -334 895 -334 155 0 262 18 348
                            58 83 39 120 73 152 138 23 47 26 63 22 122 -15 202 -209 378 -494 449 -86 21
                            -317 23 -424 4 -120 -21 -305 -86 -427 -151 l-114 -59 -9 25 c-24 63 -32 121
                            -28 212 3 82 8 107 31 155 57 116 170 172 394 196 54 6 220 16 368 21 151 6
                            307 17 354 25 294 54 430 222 431 532 0 278 -145 614 -405 938 -99 123 -93
                            119 -138 82z m-130 -2068 c178 -24 348 -111 428 -219 166 -227 -6 -375 -415
                            -357 -274 13 -534 105 -714 253 -35 29 -74 66 -86 84 -22 30 -22 32 -4 45 11
                            8 64 37 119 64 145 71 269 108 455 135 53 7 142 6 217 -5z"
              />
            </g>
          </svg>
          <small>Combien la mine vous donnera.</small>
        </div>
        <div className="txt-prestiges">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="var(--text85)"
              stroke="none"
            >
              <path
                d="M3109 3819 c-298 -70 -475 -353 -455 -729 14 -292 137 -583 369 -874
                            l67 -84 -74 -71 c-263 -255 -572 -427 -856 -477 -126 -22 -396 -14 -520 14
                            -225 53 -403 153 -556 314 -99 104 -198 262 -233 369 l-12 37 -46 -14 c-26 -8
                            -48 -16 -50 -18 -7 -7 45 -130 87 -206 239 -435 686 -656 1235 -609 366 31
                            681 185 993 484 l101 97 34 -29 c19 -15 68 -58 108 -94 87 -78 229 -185 312
                            -237 l60 -37 -139 -134 c-76 -74 -131 -132 -121 -128 93 34 418 57 659 46 84
                            -4 154 -7 155 -6 0 1 -26 34 -59 72 -148 173 -268 345 -354 508 -60 115 -53
                            125 -79 -113 -9 -80 -18 -147 -20 -149 -6 -5 -191 125 -275 193 -87 71 -200
                            176 -200 185 0 3 37 49 81 101 245 291 433 662 474 937 19 123 19 179 0 268
                            -54 253 -255 396 -555 394 -52 -1 -111 -5 -131 -10z m255 -104 c250 -44 363
                            -210 335 -489 -21 -211 -119 -447 -289 -704 -77 -116 -233 -312 -248 -312 -11
                            1 -91 102 -160 203 -108 158 -189 343 -228 519 -23 102 -23 312 -1 402 57 231
                            247 390 472 395 22 0 76 -6 119 -14z"
              />
            </g>
          </svg>
          <small>Le prix de vos prestiges.</small>
        </div>
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
              <input type="checkbox" name="black" id="0" className="mc-black" />
              <input
                type="checkbox"
                name="dark_blue"
                id="1"
                className="mc-dark_blue"
              />
              <input
                type="checkbox"
                name="dark_green"
                id="2"
                className="mc-dark_green"
              />
              <input
                type="checkbox"
                name="dark_aqua"
                id="3"
                className="mc-dark_aqua"
              />
              <input
                type="checkbox"
                name="dark_red"
                id="4"
                className="mc-dark_red"
                defaultChecked={true}
              />
              <input
                type="checkbox"
                name="dark_purple"
                id="5"
                className="mc-dark_purple"
              />
              <input type="checkbox" name="gold" id="6" className="mc-gold" />
              <input type="checkbox" name="gray" id="7" className="mc-gray" />
              <input
                type="checkbox"
                name="dark_gray"
                id="8"
                className="mc-dark_gray"
              />
              <input type="checkbox" name="blue" id="9" className="mc-blue" />
              <input type="checkbox" name="green" id="a" className="mc-green" />
              <input type="checkbox" name="aqua" id="b" className="mc-aqua" />
              <input type="checkbox" name="red" id="c" className="mc-red" />
              <input
                type="checkbox"
                name="light_purple"
                id="d"
                className="mc-light_purple"
              />
              <input
                type="checkbox"
                name="yellow"
                id="e"
                className="mc-yellow"
              />
              <input type="checkbox" name="white" id="f" className="mc-white" />
            </div>
            <div className="btns-format">
              <input type="checkbox" name="bold" id="l" className="mc-bold" />
              <input
                type="checkbox"
                name="strikethrough"
                id="m"
                className="mc-strikethrough"
              />
              <input
                type="checkbox"
                name="underline"
                id="n"
                className="mc-underline"
              />
              <input
                type="checkbox"
                name="italic"
                id="o"
                className="mc-italic"
              />
            </div>
            <div>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
