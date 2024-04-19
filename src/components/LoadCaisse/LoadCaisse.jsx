import "./LoadCaisse.css";
import { ConvertFinalText } from "../../utils/functions.jsx";

import helmet from "../../assets/mc_icons/diamond_helmet.png";
import chestplate from "../../assets/mc_icons/diamond_chestplate.png";
import leggings from "../../assets/mc_icons/diamond_leggings.png";
import boots from "../../assets/mc_icons/diamond_boots.png";
import sword from "../../assets/mc_icons/diamond_sword.png";
import axe from "../../assets/mc_icons/diamond_axe.png";
import bow from "../../assets/mc_icons/bow_standby.png";
import pickaxe from "../../assets/mc_icons/diamond_pickaxe.png";

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

export const LoadCaisse = ({ pageID, itemID, setItemID }) => {
  const caisse = require(`../../utils/caisses/${caissesDates[pageID]}.js`);
  const title = caisse.default.title;
  const items = caisse.default.items.sort((a, b) => a.type > b.type);

  const handleClick = (i) => {
    if (itemID.clicked && itemID.index !== i)
      setItemID({ clicked: itemID.clicked, index: i });
    else setItemID({ clicked: !itemID.clicked, index: i });
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
      {itemID.clicked === true ? (
        <div className="loadCaisse-enchants">
          <h6 style={{ userSelect: "none", fontFamily: "Minecraftia" }}>
            {items[itemID.index].name.split("&r").map((t, i) => (
              <ConvertFinalText text={t} key={i + t} />
            ))}
          </h6>
          <div className="loadCaisse-enchants-list">
            <div>
              {items[itemID.index].enchants.map((e, eIndex) => (
                <small
                  style={{ userSelect: "none", fontFamily: "Minecraftia" }}
                  key={e + eIndex}
                >
                  {e.split("&r").map((t, i) => (
                    <ConvertFinalText text={t} key={i + t} />
                  ))}
                </small>
              ))}
            </div>
            <img src={mc_icons[items[itemID.index].type]} alt="" />
          </div>
          {items[itemID.index].dontLeaveOnDeath ? (
            <div className="loadCaisse-leaveOnDeath">
              <small>
                {["&4&l⚔ ", "&c&lNe se perd pas à la mort."].map((txt, i) => (
                  <ConvertFinalText text={txt} key={txt + i} />
                ))}
              </small>
            </div>
          ) : (
            false
          )}
        </div>
      ) : (
        false
      )}
    </div>
  );
};
