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

export const caissesDates = [
  "04_24",
  "03_24",
  "02_24",
  "01_24",
  "12_23",
  "11_23",
  "10_23",
  "09_23",
  "08_23",
  "07_23",
  "06_23",
  "05_23",
  "04_23",
  "03_23",
  "02_23",
  "01_23",
  "12_22",
  "11_22",
  "10_22",
  "09_22",
  "08_22",
  "07_22",
  "06_22",
  "FireDroX",
  "inconnus",
];

export const LoadCaisse = ({ pageID, itemID, setItemID }) => {
  const caisse = require(`../../utils/caisses/${caissesDates[pageID]}.js`);
  const title = caisse.default.title;
  const items = caisse.default.items.sort((a, b) => a.type - b.type);

  const handleClick = (i) => {
    if (itemID.clicked && itemID.index !== i)
      setItemID({ clicked: itemID.clicked, index: i });
    else setItemID({ clicked: !itemID.clicked, index: i });
  };

  const loopFinishedItems = () => {
    let finishedItems = 0;
    for (
      let caisseDate = 0;
      caisseDate < caissesDates.length - 2;
      caisseDate++
    ) {
      const newCaisse = require(`../../utils/caisses/${caissesDates[caisseDate]}.js`);
      finishedItems += newCaisse.default.items.filter((item) =>
        item.hasOwnProperty("name")
      ).length;
    }
    return finishedItems;
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
                style={{
                  backgroundColor:
                    itemID.index === index && itemID.clicked
                      ? "var(--secondary35)"
                      : "transparent",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {itemID.clicked === true ? (
        <div className="loadCaisse-enchants">
          <h6>
            {items[itemID.index].name
              ?.split("&r")
              .map((t, i) => <ConvertFinalText text={t} key={i + t} />) ||
              items[itemID.index].defaultName}
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
      <small>{loopFinishedItems()} items répertoriés.</small>
    </div>
  );
};
