import "./ImportItem.css";
import { useState } from "react";

import { ConvertFinalText } from "../../utils/functions.jsx";
import mc_icons from "../../utils/mc_icons.js";

const ImportItem = () => {
  const [itemType, setItemType] = useState(0);
  const [convertedTxt, setConvertedTxt] = useState("");
  const [defaultName, setDefaultName] = useState("");
  const [enchantValue, setEnchantValue] = useState(0);
  const [DLOD, setDLOD] = useState(false);

  const enchantsList = [
    [
      `&b&lProtection &r&3&l${enchantValue}&r`,
      `&eSolidité &r&6${enchantValue}&r`,
    ],
    [
      `&b&lProtection &r&3&l${enchantValue}&r`,
      `&eSolidité &r&6${enchantValue}&r`,
    ],
    [
      `&b&lProtection &r&3&l${enchantValue}&r`,
      `&eSolidité &r&6${enchantValue}&r`,
    ],
    [
      `&b&lProtection &r&3&l${enchantValue}&r`,
      `&eSolidité &r&6${enchantValue}&r`,
    ],
    [
      `&aTranchant &r&2${enchantValue}&r`,
      "&eSolidité &r&610&r",
      "&dAura de Feu &r&510&r",
    ],
    [
      `&aTranchant &r&2${enchantValue}&r`,
      "&eSolidité &r&610&r",
      "&dAura de Feu &r&510&r",
    ],
    [
      `&bPunch &r&3${enchantValue}&r`,
      "&eSolidité &r&610&r",
      "&bInfinity &r&3I&r",
    ],
    [
      `&bEfficency &r&3${enchantValue}&r`,
      `&eSolidité &r&6${enchantValue}&r`,
      `&aFortune &r&2${enchantValue}&r`,
    ],
  ];

  const convertText = (text) => {
    setConvertedTxt(text.replace(/§/g, "&").replace(/&([^lmonk&])/g, "&r&$1"));
  };

  const copyItem = {
    name: convertedTxt,
    defaultName: defaultName,
    type: itemType,
    enchants: enchantsList[itemType],
    dontLeaveOnDeath: DLOD,
  };

  const handleCopy = () => {
    let copiedObject = "{\n";
    for (const key in copyItem) {
      if (copyItem.hasOwnProperty(key)) {
        copiedObject += `  ${key}: ${JSON.stringify(copyItem[key])},\n`;
      }
    }
    copiedObject += "}";
    navigator.clipboard.writeText(copiedObject);
  };

  return (
    <div className="importItem-container">
      <div className="importItem-values">
        <div className="importItem-name">
          <div className="importItem-txtInput">
            <small>name</small>
            <input
              type="text"
              onChange={(e) => convertText(e.target.value)}
              style={{ width: "8rem" }}
            />
          </div>
          <div className="importItem-txtInput">
            <small>defaultName</small>
            <input
              type="text"
              onChange={(e) => setDefaultName(e.target.value)}
              style={{ width: "8rem" }}
            />
          </div>
        </div>
        <div className="importItem-name">
          <div className="importItem-typeInput">
            <small>type</small>
            <select
              name="Type"
              defaultValue={itemType}
              onChange={(e) => setItemType(Number(e.target.value))}
            >
              <option value={0}>Helmet</option>
              <option value={1}>Chestplate</option>
              <option value={2}>Leggings</option>
              <option value={3}>Boots</option>
              <option value={4}>Sword</option>
              <option value={5}>Axe</option>
              <option value={6}>Bow</option>
              <option value={7}>Pickaxe</option>
            </select>
          </div>
        </div>
        <div className="importItem-name">
          <div className="importItem-txtInput">
            <small>enchants</small>
            <input
              type="text"
              onChange={(e) => setEnchantValue(e.target.value)}
              style={{ width: "3rem" }}
            />
          </div>
          {itemType === 6 ? (
            <div className="importItem-ckeckInput">
              <small>dontLeaveOnDeath</small>
              <input
                type="checkbox"
                name="dontLeaveOnDeath"
                defaultValue={DLOD}
                onChange={() => setDLOD(!DLOD)}
              />
            </div>
          ) : (
            false
          )}
        </div>
      </div>
      <div>
        <div className="importItem-preview">
          <h6>
            {convertedTxt !== ""
              ? convertedTxt
                  .split("&r")
                  .map((t, i) => <ConvertFinalText text={t} key={i + t} />)
              : defaultName}
          </h6>
          <div className="importItem-preview-list">
            <div>
              {enchantsList[itemType].map((e, eIndex) => (
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
            <img src={mc_icons[itemType]} alt="" />
          </div>
          {DLOD && itemType === 6 ? (
            <div className="importItem-preview-leaveOnDeath">
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
        <div className="importItem-copy">
          <button onClick={handleCopy}>Copy</button>
        </div>
      </div>
    </div>
  );
};

export default ImportItem;