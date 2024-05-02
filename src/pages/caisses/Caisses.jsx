import "./Caisses.css";
import "../../components/MinecraftColoredText/MinecraftColoredText.css";

import { useContext, useState } from "react";
import { UserContext } from "../../utils/contexts/UserContext";

import ImportItem from "../../components/ImportItem/ImportItem";
import { LoadCaisse } from "../../components/LoadCaisse/LoadCaisse";
import {
  numberToMonth,
  extractAndConvertEnchantLevel,
  filterItems,
} from "../../utils/functions";

const caissesDates = [
  "05_24",
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
  "inconnus",
  "FireDroX",
];

const Caisses = () => {
  const { boxPage, setBoxPage, isClicked, setIsClicked } =
    useContext(UserContext);

  const [caisse, setCaisse] = useState(
    require(`../../utils/caisses/${caissesDates[boxPage]}.js`)
  );
  const [search, setSearch] = useState("");
  const [importMenu, setImportMenu] = useState(false);

  const handleBtn = (e) => {
    switch (e) {
      case "+":
        if (boxPage !== caissesDates.length - 1) {
          setCaisse(
            require(`../../utils/caisses/${caissesDates[boxPage + 1]}.js`)
          );
          setBoxPage(boxPage + 1);
          setIsClicked({ clicked: false, index: 0 });
        }
        break;
      case "-":
        if (boxPage !== 0) {
          setCaisse(
            require(`../../utils/caisses/${caissesDates[boxPage - 1]}.js`)
          );
          setBoxPage(boxPage - 1);
          setIsClicked({ clicked: false, index: 0 });
        }
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    setSearch(e.toLowerCase());
    setIsClicked({ clicked: false, index: 0 });
  };

  const getDate = () => {
    let dateArray = caissesDates[boxPage].split("_");
    return `${numberToMonth(dateArray[0]) + " 20" + dateArray[1]}`;
  };

  const loopFinishedItems = () => {
    let finishedItems = [];
    for (let caisseDate = 0; caisseDate < caissesDates.length; caisseDate++) {
      const newCaisse = require(`../../utils/caisses/${caissesDates[caisseDate]}.js`);
      newCaisse.default.items
        .filter((item) => item.hasOwnProperty("name"))
        .map((i) => finishedItems.push(i));
    }
    return finishedItems;
  };

  return (
    <section className="App">
      <div>
        <div className="caisses-container">
          {importMenu ? (
            <ImportItem />
          ) : (
            <>
              <div className="caisse-search">
                <small style={{ color: "var(--text85)" }}>
                  Rechercher un item
                </small>
                <input
                  name="Rechercher un item"
                  type="text"
                  value={search.toLowerCase()}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              {search === "" ? (
                <>
                  <LoadCaisse
                    box={{
                      title: "Caisse " + caisse.default.title,
                      items: caisse.default.items,
                    }}
                    itemID={isClicked}
                    setItemID={setIsClicked}
                  />
                  {caissesDates[boxPage].match("_") ? (
                    <small>Box de {getDate()}</small>
                  ) : (
                    false
                  )}
                </>
              ) : (
                <LoadCaisse
                  box={{
                    title: "",
                    items: loopFinishedItems()
                      .filter((item) => filterItems(item, search))
                      .sort(
                        (a, b) =>
                          extractAndConvertEnchantLevel(b) -
                          extractAndConvertEnchantLevel(a)
                      ),
                  }}
                  itemID={isClicked}
                  setItemID={setIsClicked}
                />
              )}
              {search === "" ? (
                <div className="input-btns">
                  <button
                    style={{
                      backgroundColor:
                        boxPage === 0 ? "var(--primary15)" : "var(--primary65)",
                    }}
                    onClick={() => handleBtn("-")}
                  >
                    {"<"}
                  </button>
                  <button
                    style={{
                      backgroundColor:
                        boxPage === caissesDates.length - 1
                          ? "var(--primary15)"
                          : "var(--primary65)",
                    }}
                    onClick={() => handleBtn("+")}
                  >
                    {">"}
                  </button>
                </div>
              ) : (
                false
              )}
            </>
          )}
        </div>
      </div>
      <small
        className="caisse-footer"
        onClick={() => setImportMenu(!importMenu)}
      >
        {loopFinishedItems().length} items répertoriés.
      </small>
    </section>
  );
};

export default Caisses;
