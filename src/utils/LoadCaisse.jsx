import { useState } from "react";

import { ConvertFinalText } from "./functions.jsx";

import helmet from "../assets/mc_icons/diamond_helmet.png";
import chestplate from "../assets/mc_icons/diamond_chestplate.png";
import leggings from "../assets/mc_icons/diamond_leggings.png";
import boots from "../assets/mc_icons/diamond_boots.png";
import sword from "../assets/mc_icons/diamond_sword.png";
import axe from "../assets/mc_icons/diamond_axe.png";
import bow from "../assets/mc_icons/bow_standby.png";
import pickaxe from "../assets/mc_icons/diamond_pickaxe.png";

const mc_icons = [
  helmet,
  chestplate,
  leggings,
  boots,
  sword,
  axe,
  bow,
  pickaxe,
];

export const caissesDates = ["04_24", "03_24"];

export const LoadCaisse = ({ index }) => {
  const [isClicked, setIsClicked] = useState({ clicked: false, index: 0 });

  const caisse = require(`./caisses/${caissesDates[index]}.js`);

  const title = caisse.default.title;
  const items = caisse.default.items;

  const handleClick = (i) => {
    if (isClicked.clicked && isClicked.index !== i)
      setIsClicked({ clicked: isClicked.clicked, index: i });
    else setIsClicked({ clicked: !isClicked.clicked, index: i });
  };

  return (
    <div className="loadCaisse">
      <div className="loadCaisse-container">
        <h5>Caisse {title}</h5>
        <div className="loadCaisse-inventory">
          {items.map((item, index) => (
            <div className="loadCaisse-item" key={title + index}>
              <img
                src={mc_icons[item.type]}
                alt=""
                onClick={() => handleClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
      {isClicked.clicked === true ? (
        <div className="loadCaisse-item final-txt">
          <small style={{ userSelect: "none" }}>
            {items[isClicked.index].name.split("&r").map((t, i) => (
              <ConvertFinalText text={t} key={i + t} />
            ))}
          </small>
        </div>
      ) : (
        false
      )}
    </div>
  );
};
