import "./LoadCaisse.css";
import { ConvertFinalText, findHexCharacters } from "../../utils/functions.jsx";
import mc_icons from "../../utils/mc_icons.js";

export const LoadCaisse = ({ box, itemID, setItemID }) => {
  const title = box.title;
  const items = box.items.sort((a, b) => a.type - b.type);

  const handleClick = (i) => {
    if (itemID.clicked && itemID.index !== i)
      setItemID({ clicked: itemID.clicked, index: i });
    else setItemID({ clicked: !itemID.clicked, index: i });
  };

  return (
    <div className="loadCaisse">
      <div className="loadCaisse-container">
        <h5>{title}</h5>
        <div className="loadCaisse-inventory">
          {items.map((item, index) => (
            <div className="loadCaisse-item" key={title + index}>
              <img
                src={mc_icons[item.type]}
                alt="Small Item Icon"
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
              {items[itemID.index].enchants?.map((e, eIndex) => (
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
            <img src={mc_icons[items[itemID.index].type]} alt="Big Item Icon" />
          </div>
          {items[itemID.index].dontLeaveOnDeath ? (
            <div className="loadCaisse-leaveOnDeath">
              <small>
                {[
                  `&${findHexCharacters(items[itemID.index].name)[0]}&l⚔ `,
                  `&${
                    findHexCharacters(items[itemID.index].name)[1]
                  }&lNe se perd pas à la mort.`,
                ].map((txt, i) => (
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
